//Color
export function randomHexColor(): string;
export function contrastColor(color: string): string;
export function hsvToRgb(h: string, s: string, v: string): object;
export function rgbToHsl(r: string, g: string, b: string): object;
export function hexToRgb(hex: string): object | null;
export function hsvToHsl(h: string, s: string, v: string): object;
export function rgbToHex(r: string, g: string, b: string): string;
export function rgbToHsv(r: string, g: string, b: string): object;
export function hslToRgb(h: string, s: string, l: string): object;

//String
export function acronym(str: string): string;
export function isEmpty(str: string): boolean;
export function randomString(length: number): string;
export function isEmail(str: string): boolean;

//Date
export function getCurrentYear(): string;
export function getCurrentMonth(): object;
export function getCurrentDay(): object;
export function daysInCurrentMonth(): string|number;
export function getMonthName(monthNumber: number): object;
export function getDayByDayNumber(dayNumber: number): object;
export function getDayByDate(month: number, dayOfMonth: number, year: number): object;
export function daysInMonth(monthNumber: number, year: number): string|number;