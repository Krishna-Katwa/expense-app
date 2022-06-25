import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,   //it help to create extra options
    transform :true,
    transformOptions:{
    enableImplicitConversion:true,
    }
   }) 
  );
  await app.listen(3000);
}
bootstrap();



// options
// id : uuid(),
// source,
// amount,
// created_at : new Date(),
// updated_at : new Date(),
// type 