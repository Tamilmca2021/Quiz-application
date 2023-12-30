import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

function AddQuestion() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      ></Modal>

      <Button onClick={open} variant="filled" color="green">
        + Add Question
      </Button>
    </>
  );
}
export default AddQuestion;
