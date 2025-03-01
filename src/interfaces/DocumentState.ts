export default interface DocumentState {
  currentDocumentId: string | null;
  totalDocuments: number;
  listOfDocuments: { id: string; title: string }[];
}
