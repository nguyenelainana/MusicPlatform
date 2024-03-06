import { create } from "zustand";

interface UploadModalStore {
  isOpen: boolean;
  onOpen: () => void; //void function
  onClose: () => void;
}

//extract function and open arrow function that return an immediate object
const useUploadModal = create<UploadModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;
