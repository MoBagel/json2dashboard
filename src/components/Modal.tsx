import type { ButtonProps} from 'antd';
import { Modal } from 'antd';

const CustomModal = ({
  title,
  isModalVisible,
  onConfirm,
  onCancel,
  children,
  okButtonProps,
  cancelButtonProps,
}: {
  title: string;
  isModalVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  children: any;
  okButtonProps: ButtonProps;
  cancelButtonProps: ButtonProps;
}): JSX.Element => {
  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={onConfirm}
      okButtonProps={okButtonProps}
      onCancel={onCancel}
      cancelButtonProps={cancelButtonProps}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
