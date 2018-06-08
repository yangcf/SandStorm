/**
 * 此文件用来定义action的type,便于交互管理
 */

export const LOCATION_DONE = 'LOCATION_DONE';//确定公司位置

export const LOCATION_CONTAIN = 'LOCATION_CONTAIN';//处于坐标范围内

export const LOCATION_CLOCK_IN = 'LOCATION_CLOCK_IN';//即将脱离打卡范围：打卡提醒

export const LOCATION_START = 'LOCATION_START';//开启监控

export const LOCATION_CLOSE = 'LOCATION_CLOSE';//关闭监控