export interface ModalProps {
  longDesc?: string;
  isOpen: boolean;
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
