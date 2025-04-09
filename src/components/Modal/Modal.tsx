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

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		document.addEventListener('keydown', handleKeyDown);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'auto';
		};
	}, [isOpen, onClose]);

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
