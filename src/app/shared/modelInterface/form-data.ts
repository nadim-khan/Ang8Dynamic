export interface FormData {
    
    stepName: string;
    Controls: Array<{
        Field : string;
        Type : string;
        Required : boolean;
        Length? : number;
        Options?: Array<string>;
    }>;
    
  }
  