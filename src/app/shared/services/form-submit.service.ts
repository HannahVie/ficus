/**
 * @deprecated Use `EmailService` from `src/app/shared/email/email.service.ts`.
 * This file remains only to avoid breaking imports if someone referenced the old path.
 */
export {
  EmailService as FormSubmitService
} from '../email/email.service';

export type { EmailPayload as FormSubmitPayload } from '../email/email.service';
