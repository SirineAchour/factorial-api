import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFact(num:number): any {
    if(isNaN(num)){
      return "not a number"
    }
    if(num <= 0){
      return 1
    }else{
      return num * this.getFact(num-1)
    }
  }
}
