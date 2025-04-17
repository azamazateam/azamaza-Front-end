import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import {motion, AnimatePresence} from 'framer-motion';
import s from './Modal.module.css';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	fullScreen?: boolean;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	fullScreen,
}) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const previouslyFocusedElement = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (!isOpen) return;

		// Save focused element
		previouslyFocusedElement.current = document.activeElement as HTMLElement;

		// Lock scroll and compensate for scrollbar width
		const scrollBarWidth =
			window.innerWidth - document.documentElement.clientWidth;
		document.documentElement.style.overflow = 'hidden';
		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = `${scrollBarWidth}px`;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();

			// Trap focus
			if (e.key === 'Tab' && modalRef.current) {
				const focusableElements =
					modalRef.current.querySelectorAll<HTMLElement>(
						'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
					);
				if (focusableElements.length === 0) return;

				const first = focusableElements[0];
				const last = focusableElements[focusableElements.length - 1];

				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		// Focus modal on open
		setTimeout(() => {
			if (modalRef.current) {
				const focusable = modalRef.current.querySelector<HTMLElement>(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
				);
				focusable?.focus();
			}
		}, 0);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.documentElement.style.overflow = '';
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';

			// Restore focus
			previouslyFocusedElement.current?.focus();
		};
	}, [isOpen, onClose]);

	// Click outside to close
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				onClose();
			}
		};
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isOpen, onClose]);

	return createPortal(
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className={s.modalBackdrop}
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					role="dialog"
					aria-modal="true"
				>
					<motion.div
						ref={modalRef}
						className={`${s.modalContent} ${fullScreen ? s.fullScreen : ''}`}
						initial={{scale: 0.95, opacity: 0}}
						animate={{scale: 1, opacity: 1}}
						exit={{scale: 0.95, opacity: 0}}
						transition={{duration: 0.2}}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.getElementById('modal-root') as HTMLElement,
	);
};

export default Modal;
