import { Injectable } from "@nestjs/common";
import{ ReportType, data } from "src/data";
import { v4 as uuid } from "uuid"
import { ReportResposeDto } from "src/dtos/report.dto";

interface Report {
  amount: number,
  source: String
}

interface UpdateReport {
  amount?: number,
  source?: String
}

@Injectable()
export class ReportService {
  getAllReports(type: ReportType ) : ReportResposeDto[] {
    return data.report.filter((report) => report.type === type).map(report => new ReportResposeDto(report));
  }

  getReportById(type: ReportType, id: String) :ReportResposeDto {
    const report = data.report.filter((report) => report.type === type).find(report => report.id === id);

    if (!report) return;

    return new ReportResposeDto(report)
  }

  createReport(type : ReportType, {amount, source}: Report) :ReportResposeDto {
    const newReport = {
      id : uuid(),
      source,
      amount,
      created_at : new Date(),
      updated_at : new Date(),
      type 
    };
    data.report.push(newReport)
      return new ReportResposeDto(newReport);
  }

  updateReport(type : ReportType,id: String, body: UpdateReport) : ReportResposeDto {
    const reportToUpdate = data.report.filter((report) => report.type === type).find(report => report.id === id);

    if(!reportToUpdate) return;

    const reportIndex = data.report.findIndex((report) => report.id === reportToUpdate.id );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at : new Date()

    };
    return new ReportResposeDto(data.report[reportIndex])
  }
  deleteReport(id : String){
    const reportIndex = data.report.findIndex(report => report.id === id);

    if(reportIndex === -1) return;
    data.report.splice(reportIndex, 1)
    return;
  }
}
