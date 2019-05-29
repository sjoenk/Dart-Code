import { NotificationType } from "vscode-languageclient";

export class AnalyzerStatusNotification {
	public static type = new NotificationType<AnalyzerStatusParams, void>("$/analyzerStatus");
}

export interface AnalyzerStatusParams {
	readonly isAnalyzing: boolean;
}
