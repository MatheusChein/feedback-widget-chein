import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("submit feedback", () => {
  it("should create a new feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "fakeType",
        comment: "fakeComment",
        screenshot: "data:image/png;base64-test.jpg",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not create a new feedback if type is empty", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "fakeComment",
        screenshot: "data:image/png;base64-test.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not create a new feedback if comment is empty", async () => {
    await expect(
      submitFeedback.execute({
        type: "fakeType",
        comment: "",
        screenshot: "data:image/png;base64-test.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not create a new feedback with invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "fakeType",
        comment: "fakeComment",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
