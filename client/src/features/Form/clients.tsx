import Submit from "features/Reused/Submit";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

function ClientForm() {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormContainer
      //   defaultValues={{
      //     name: "",
      //   }}
      onSuccess={handleSubmit}
    >
      <TextFieldElement
        fullWidth
        sx={{ my: 1 }}
        name="lname"
        label="Отчество"
      />
      <TextFieldElement
        fullWidth
        sx={{ my: 1 }}
        name="fname"
        label="Имя"
      />
      <TextFieldElement
        fullWidth
        sx={{ my: 1 }}
        name="mname"
        label="Фамилия"
      />
      <TextFieldElement
        fullWidth
        sx={{ my: 1 }}
        name={"email"}
        label={"Email"}
        required
        type={"email"}
      />
      <TextFieldElement
        fullWidth
        sx={{ my: 1 }}
        name={"phone"}
        label={"Телефон"}
        required
        type={"tel"}
      />
      <Submit />
    </FormContainer>
  );
}

export default ClientForm;
