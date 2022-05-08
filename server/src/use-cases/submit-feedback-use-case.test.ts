import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSy },
  { sendMail: sendMailSpy },
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: 'This is a bug',
      screenshot: 'data:image/png:base64,wiqd7idia7asid',
    })).resolves.not.toThrow();

    expect(createFeedbackSy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: '',
      comment: 'This is a bug',
      screenshot: 'data:image/png:base64,wiqd7idia7asid',
    })).rejects.toThrow();
  })

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png:base64,wiqd7idia7asid',
    })).rejects.toThrow();
  })

  it('should not be able to submit a feedback without screenshot', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: 'This is a bug',
      screenshot: 'image.jpg',
    })).rejects.toThrow();
  })
})