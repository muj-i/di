import { Controller, Get } from '@nestjs/common';
import { DiskService } from 'src/disk/disk.service';
import { CpuService } from './../cpu/cpu.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get('boot')
  boot() {
    return [this.cpuService.compute(1, 2), this.diskService.read()];
  }
}
