import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from 'src/app.service';
import { CustomInterceptor } from './custom.interceptor';
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from 'src/report/report.module';

@Module({
  imports : [SummaryModule, ReportModule],
  controllers : [AppController],
  providers : [
    AppService,
     {
     provide: APP_INTERCEPTOR,
     useClass: CustomInterceptor,
  },
 ],
})
export class AppModule {}


// nest g module summary
// nest g controller summary
// nest g controller service

// nest g module report
// nest g controller report
// nest g service report   (3:03:27 time in youtube start from here)