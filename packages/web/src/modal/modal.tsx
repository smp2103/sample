'use client';

import { DiscountModal, OrderDetailModal, ReceiptModal } from '@smp/features';
import {
  createModalStack,
  ModalOptions,
  ModalStackConfig,
  ModalProvider as NativeModalProvider,
} from 'react-native-modalfy';

const modalConfig: ModalStackConfig = {
  OrderDetailModal: OrderDetailModal,
  DiscountModal: DiscountModal,
  ReceiptModal: ReceiptModal,
};

const defaultOptions: ModalOptions = {
  backdropOpacity: 0.6,
};

export const ModalStack = createModalStack(modalConfig, defaultOptions);

export const ModalProvider = NativeModalProvider;
