import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ServiceProposeType = {
	title: string;
	image: string;
	price: string;
	discount: string;
	link: string;
	serviceName: string | null;
};
type SliceType = {
	proposeList: ServiceProposeType[] | null;
};
const initialState: SliceType = {proposeList: null};

const proposeSlice = createSlice({
	name: 'propose',
	initialState,
	reducers: {
		setProposeList: (
			state,
			action: PayloadAction<ServiceProposeType[] | null>,
		) => {
			state.proposeList = action.payload;
		},
	},
});

export const {setProposeList} = proposeSlice.actions;
export default proposeSlice.reducer;
