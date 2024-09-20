// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.1
// source: exampleMessage.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "proto.example";

export interface ExampleRequest {
  query: string;
  pageNumber: number;
}

export interface ExampleResponse {
  results: string[];
  totalPages: number;
}

function createBaseExampleRequest(): ExampleRequest {
  return { query: "", pageNumber: 0 };
}

export const ExampleRequest: MessageFns<ExampleRequest> = {
  encode(message: ExampleRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.query !== "") {
      writer.uint32(10).string(message.query);
    }
    if (message.pageNumber !== 0) {
      writer.uint32(16).int32(message.pageNumber);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExampleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExampleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.query = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageNumber = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExampleRequest {
    return {
      query: isSet(object.query) ? globalThis.String(object.query) : "",
      pageNumber: isSet(object.pageNumber) ? globalThis.Number(object.pageNumber) : 0,
    };
  },

  toJSON(message: ExampleRequest): unknown {
    const obj: any = {};
    if (message.query !== "") {
      obj.query = message.query;
    }
    if (message.pageNumber !== 0) {
      obj.pageNumber = Math.round(message.pageNumber);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExampleRequest>, I>>(base?: I): ExampleRequest {
    return ExampleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExampleRequest>, I>>(object: I): ExampleRequest {
    const message = createBaseExampleRequest();
    message.query = object.query ?? "";
    message.pageNumber = object.pageNumber ?? 0;
    return message;
  },
};

function createBaseExampleResponse(): ExampleResponse {
  return { results: [], totalPages: 0 };
}

export const ExampleResponse: MessageFns<ExampleResponse> = {
  encode(message: ExampleResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      writer.uint32(10).string(v!);
    }
    if (message.totalPages !== 0) {
      writer.uint32(16).int32(message.totalPages);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExampleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExampleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalPages = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExampleResponse {
    return {
      results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => globalThis.String(e)) : [],
      totalPages: isSet(object.totalPages) ? globalThis.Number(object.totalPages) : 0,
    };
  },

  toJSON(message: ExampleResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results;
    }
    if (message.totalPages !== 0) {
      obj.totalPages = Math.round(message.totalPages);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExampleResponse>, I>>(base?: I): ExampleResponse {
    return ExampleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExampleResponse>, I>>(object: I): ExampleResponse {
    const message = createBaseExampleResponse();
    message.results = object.results?.map((e) => e) || [];
    message.totalPages = object.totalPages ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
