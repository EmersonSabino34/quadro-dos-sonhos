// types/qrcode.d.ts
// Declaração de módulo para a biblioteca 'qrcode' (versão moderna com promises)

declare module 'qrcode' {
  /**
   * Gera um QR Code como string (Data URL, SVG ou texto)
   */
  export function toDataURL(
    text: string,
    options?: QRCodeRenderOptions
  ): Promise<string>;

  export function toString(
    text: string,
    options?: QRCodeRenderOptions
  ): Promise<string>;

  export function toCanvas(
    canvasElement: HTMLCanvasElement | string,
    text: string,
    options?: QRCodeRenderOptions
  ): Promise<void>;

  export function toCanvas(
    text: string,
    options?: QRCodeRenderOptions
  ): Promise<HTMLCanvasElement>;

  // Outros formatos menos comuns
  export function toSVG(text: string, options?: QRCodeRenderOptions): Promise<string>;

  // Opções de renderização
  export interface QRCodeRenderOptions {
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
    margin?: number;
    scale?: number;
    width?: number;
    color?: {
      dark?: string;
      light?: string;
    };
    type?: 'image/png' | 'image/jpeg' | 'image/webp';
    quality?: number;
    version?: number;
  }

  // Níveis de correção de erro
  export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

  // Default export compatibility: an object containing the functions above
  const QRCode: {
    toDataURL(text: string, options?: QRCodeRenderOptions): Promise<string>;
    toString(text: string, options?: QRCodeRenderOptions): Promise<string>;
    toCanvas(canvas: HTMLCanvasElement | string, text: string, options?: QRCodeRenderOptions): Promise<void>;
    toCanvas(text: string, options?: QRCodeRenderOptions): Promise<HTMLCanvasElement>;
    toSVG(text: string, options?: QRCodeRenderOptions): Promise<string>;
  };

  export default QRCode;
  export = QRCode;
}
