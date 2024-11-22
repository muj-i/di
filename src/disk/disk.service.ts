import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  read() {
    this.powerService.supplyPower(5);
    console.log('Reading... with 5 watts');
    return 'data';
  }
}
