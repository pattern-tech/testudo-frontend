import { Observable, of, throwError } from 'rxjs';

export const connectWallet = (): Observable<unknown> => {
  const ergoConnector = window.ergoConnector;

  if (!ergoConnector?.nautilus) {
    return throwError(() => new Error('EXTENSION_NOT_FOUND'));
  }

  if (!ergoConnector.nautilus?.getContext) {
    return of(
      'Wallet API has changed. Be sure to update your wallet to continue using it',
    );
  }

  return ergoConnector.nautilus.connect();
};
