import { create } from 'zustand';
// import bhdCard from '../../assets/BHDcarta.jpeg';

interface ItemHistory {
  title: string;
  path: string;
  image: string;
}

interface HistoryState {
  histories: ItemHistory[];
  addHistory: (newHistory: ItemHistory) => void;
  deleteHistory: (title: string) => void;
}

export const useHistory = create<HistoryState>()((set) => ({
  histories: [],

  addHistory: (newHistory) =>
    set((state) => ({
      histories: [
        {...newHistory},
        ...state.histories.filter((h) => h.path !== newHistory.path),
      ],
    })),

  deleteHistory: (title) =>
    set((state) => ({
      histories: state.histories.filter((h) => h.title !== title),
    })),
}));