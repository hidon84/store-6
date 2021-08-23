import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import {
    commonError,
    LikeGetError
} from '@/constants/error';
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
      throw new ErrorResponse(LikeGetError.unable);
    }
  }
}

export default LikeService;
