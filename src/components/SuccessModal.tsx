interface ModalProps {
  message: string,
  optionalMessage?: string
}

const SuccessModal = ({ message, optionalMessage }: ModalProps) => {
  return (
    <div className="success-modal">
      Success!
      <p>{message}</p>
      <p>{optionalMessage}</p>
    </div>
  )
}

export default SuccessModal
