import { create } from "zustand";

interface AuthModalStore {
  isOpen: boolean;
  onOpen: () => void; //void function
  onClose: () => void;
}

//extract function and open arrow function that return an immediate object
const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
