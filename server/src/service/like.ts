import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import { commonError, likeGetError, likeDeleteError } from '@/constants/error';
import LikeRepository from '@/repository/like';

@Service()
class LikeService {
  private likeRepository: LikeRepository;

  constructor(
    @InjectRepository(LikeRepository)
    likeRepository: LikeRepository,
  ) {
    this.likeRepository = likeRepository;
  }

  async getLikes(userIdx: number) {
    try {
      const likes = await this.likeRepository.findByIdxOfUser(userIdx);
      return likes;
    } catch {
      throw new ErrorResponse(likeGetError.unable);
    }
  }

  async deleteLike(userIdx: number, likeIdx: number) {
    try {
      const like = await this.likeRepository.findByIdx(likeIdx);

      if (!like) {
        throw new ErrorResponse(commonError.notFound);
      }

      if (userIdx !== like.user.idx) {
        throw new ErrorResponse(commonError.forbidden);
      }

      await this.likeRepository.deleteItem(like);
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(likeDeleteError.unable);
    }
  }
}

export default LikeService;
