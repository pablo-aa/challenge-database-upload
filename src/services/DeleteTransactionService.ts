// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionRepository.findOne({
      where: { id },
    });

    if (transaction) {
      await transactionRepository.delete(id);
    }
  }
}

export default DeleteTransactionService;
