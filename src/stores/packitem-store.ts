import { create } from "zustand";

interface PackItem {
  id: string;
  isChecked: boolean;
  title: string;
}

interface PackItemStore {
  addItem: (title: string) => void;
  packItems: PackItem[];
  removeItem: (id: string) => void;
  updateItem: (id: string) => void;
}

export const usePackItemStore = create<PackItemStore>((set) => ({
  addItem: (title) =>
    set((state) => ({
      packItems: [
        ...state.packItems,
        {
          id: crypto.randomUUID(),
          isChecked: false,
          title,
        },
      ],
    })),

  packItems: [
    {
      id: "1",
      isChecked: true,
      title: "لباس راحتی و لباس اضافه",
    },
    {
      id: "2",
      isChecked: false,
      title: "شارژر موبایل و پاوربانک",
    },
  ],

  removeItem: (id) =>
    set((state) => ({
      packItems: state.packItems.filter((item) => item.id !== id),
    })),

  updateItem: (id) =>
    set((state) => ({
      packItems: state.packItems.map((packItem) =>
        packItem.id === id
          ? { ...packItem, isChecked: !packItem.isChecked }
          : packItem
      ),
    })),
}));
