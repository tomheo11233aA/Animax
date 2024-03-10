import { RootState } from "@redux/store/store";

export const bankSelector = (state: RootState) => state.bank.banks
