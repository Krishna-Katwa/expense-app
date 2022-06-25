import {Controller, Get, Post, Put, Delete, Param, Body, HttpCode, ParseUUIDPipe, ParseEnumPipe} from "@nestjs/common";
import { ReportType } from "src/data";
import { ReportService } from "./report.service";
import { CreateReportDto, ReportResposeDto, UpdateReportDto } from "src/dtos/report.dto";

@Controller('report/:type')   //type: can be "income" or "expense"

export class ReportController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly reportService : ReportService
  ){}

  @Get('')
  getAllReport(@Param('type',new ParseEnumPipe(ReportType)) type:string) : ReportResposeDto[]{
    console.log(type);
    const reportType = type ==="income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.getAllReports(reportType)
  }

  @Get(':id')
  getReportById(
    @Param('type',new ParseEnumPipe(ReportType)) type: String ,
     @Param('id', ParseUUIDPipe) id: String) : ReportResposeDto{
    console.log( id, typeof id )
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getReportById(reportType, id)
  }

  @Post()
  createReport( 
    @Body() { amount, source } :  CreateReportDto,
     @Param('type',new ParseEnumPipe(ReportType)) type:String) :ReportResposeDto{
    // console.log({  })
    const reportType = type ==='income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.createReport(reportType, {amount,source})
  }

  @Put(':id')
  updateReport( 
    @Param('type',new ParseEnumPipe(ReportType)) type: string, 
    @Param('id', ParseUUIDPipe) id:string ,
    @Body() body: UpdateReportDto,
    ) : ReportResposeDto{
      console.log(body);
      const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
      return this.reportService.updateReport(reportType, id, body)
  }
      @HttpCode(204)
  @Delete(':id')
  deleteReport( @Param('id', ParseUUIDPipe) id: string) {
    return this.deleteReport(id);
  }
}


// npm run start:dev by running this command on the terminal
// & localhost:3000/report/income on the browser
// we can observe o/p as
// []
