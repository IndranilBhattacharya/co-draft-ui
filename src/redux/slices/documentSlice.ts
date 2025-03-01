import { createSlice } from "@reduxjs/toolkit";
import DocumentState from "../../interfaces/DocumentState";

const initialState: DocumentState = {
  currentDocumentId: null,
  totalDocuments: 0,
  listOfDocuments: [],
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setDocuments: (state, action) => {
      state.listOfDocuments = action.payload;
      state.totalDocuments = action.payload.length;
    },
    setCurrentDocument: (state, action) => {
      state.currentDocumentId = action.payload;
    },
  },
});

export const { setDocuments, setCurrentDocument } = documentSlice.actions;
export default documentSlice.reducer;
