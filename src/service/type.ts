export interface Service {
  getText(count: number, text: string): Promise<any>;
}
