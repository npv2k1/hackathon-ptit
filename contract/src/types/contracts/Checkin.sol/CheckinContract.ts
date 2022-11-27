/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "../../types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type CheckinEvent = ContractEventLog<{
  id: string;
  user: string;
  timestamp: string;
  userInfo: string;
  checkinInfo: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;

export interface CheckinContract extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): CheckinContract;
  clone(): CheckinContract;
  methods: {
    checkIn(_checkinInfo: string): NonPayableTransactionObject<void>;

    checkinId(): NonPayableTransactionObject<string>;

    claim(): NonPayableTransactionObject<void>;

    getAddress(): NonPayableTransactionObject<string>;

    getCheckIn(
      id: number | string | BN
    ): NonPayableTransactionObject<[string, string, string, string, string]>;

    getMyCheckIn(): NonPayableTransactionObject<
      [string, string, string, string, string][]
    >;

    getMyInfo(): NonPayableTransactionObject<string>;

    getTokenBalance(): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    rewardAmount(): NonPayableTransactionObject<string>;

    tokenContract(): NonPayableTransactionObject<string>;

    userInfoContract(): NonPayableTransactionObject<string>;
  };
  events: {
    CheckinEvent(cb?: Callback<CheckinEvent>): EventEmitter;
    CheckinEvent(
      options?: EventOptions,
      cb?: Callback<CheckinEvent>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "CheckinEvent", cb: Callback<CheckinEvent>): void;
  once(
    event: "CheckinEvent",
    options: EventOptions,
    cb: Callback<CheckinEvent>
  ): void;
}
