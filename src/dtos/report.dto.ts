import { IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional } from "class-validator";
import { ReportType } from "src/data";
import { Exclude, Expose } from "class-transformer"

export class CreateReportDto {
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsString()
    @IsNotEmpty()
    source: String;

}

export class UpdateReportDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount: number;


    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: String;
}

export class ReportResposeDto  {
    id: String;
    source: String;
    amount: number;

    @Expose({ name: 'createdAt'})
    transformCreatedAt() {
        return this.created_at;
    }

    @Exclude()
    created_at: Date;
    updated_at: Date;
    type: ReportType 

    constructor(partial : Partial<ReportResposeDto>){
        Object.assign(this, partial);
    }
}


// 1st step:-> npm i class-validator class-transformer