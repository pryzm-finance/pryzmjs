//@ts-nocheck
/**
* This file and any referenced files were automatically generated by @refractedlabs/telescope@1.4.1-rc24
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/

import { BinaryReader } from "./binary";
import { Any, AnyAmino } from "./google/protobuf/any";
import { IProtoType, TelescopeGeneratedCodec } from "./types";

export class GlobalDecoderRegistry {
  static registry: {
    [key: string]: TelescopeGeneratedCodec<any, any, any>;
  } = {};

  static aminoProtoMapping: {
    [key: string]: string;
  } = {};

  static registerAminoProtoMapping(aminoType: string, typeUrl) {
    GlobalDecoderRegistry.aminoProtoMapping[aminoType] = typeUrl;
  }

  static register<T, SDK, Amino>(
    key: string,
    decoder: TelescopeGeneratedCodec<T, SDK, Amino>
  ) {
    GlobalDecoderRegistry.registry[key] = decoder;
  }
  static getDecoder<T, SDK, Amino>(
    key: string
  ): TelescopeGeneratedCodec<T, SDK, Amino> {
    return GlobalDecoderRegistry.registry[key];
  }
  static getDecoderByInstance<T, SDK, Amino>(
    obj: unknown
  ): TelescopeGeneratedCodec<T, SDK, Amino> | null {
    if (obj === undefined || obj === null) {
      return null;
    }
    const protoType = obj as IProtoType;

    if (protoType.$typeUrl) {
      return GlobalDecoderRegistry.getDecoder<T, SDK, Amino>(
        protoType.$typeUrl
      );
    }

    for (const key in GlobalDecoderRegistry.registry) {
      if (
        Object.prototype.hasOwnProperty.call(
          GlobalDecoderRegistry.registry,
          key
        )
      ) {
        const element = GlobalDecoderRegistry.registry[key];

        if (element.is!(obj)) {
          return element;
        }

        if (element.isSDK && element.isSDK(obj)) {
          return element;
        }

        if (element.isAmino && element.isAmino(obj)) {
          return element;
        }
      }
    }

    return null;
  }
  static getDecoderByAminoType<T, SDK, Amino>(
    type: string
  ): TelescopeGeneratedCodec<T, SDK, Amino> | null {
    if (type === undefined || type === null) {
      return null;
    }

    const typeUrl = GlobalDecoderRegistry.aminoProtoMapping[type];

    if (!typeUrl) {
      return null;
    }

    return GlobalDecoderRegistry.getDecoder<T, SDK, Amino>(typeUrl);
  }
  static wrapAny(obj: unknown): Any {
    if(Any.is(obj)){
      return obj;
    }

    const decoder = getDecoderByInstance(obj);

    return {
      typeUrl: decoder.typeUrl,
      value: decoder.encode(obj).finish(),
    };
  }
  static unwrapAny<T, SDK, Amino>(input: BinaryReader | Uint8Array | Any) {
    let data;

    if (Any.is(input)) {
      data = input;
    } else {
      const reader =
        input instanceof BinaryReader ? input : new BinaryReader(input);

      data = Any.decode(reader, reader.uint32());
    }

    const decoder = GlobalDecoderRegistry.getDecoder<T, SDK, Amino>(
      data.typeUrl
    );

    if (!decoder) {
      return data;
    }

    return decoder.decode(data.value);
  }
  static fromJSON<T>(object: any): T {
    const decoder = getDecoderByInstance<T>(object);
    return decoder.fromJSON!(object);
  }
  static toJSON<T>(message: T): any {
    const decoder = getDecoderByInstance<T>(message);
    return decoder.toJSON!(message);
  }
  static fromPartial<T>(object: unknown): T {
    const decoder = getDecoderByInstance<T>(object);
    return decoder ? decoder.fromPartial(object) : (object as T);
  }
  static fromSDK<T = unknown, SDK = unknown>(object: SDK): T {
    const decoder = getDecoderByInstance<T, SDK>(object);
    return decoder.fromSDK!(object);
  }
  static fromSDKJSON<SDK = unknown>(object: any): SDK {
    const decoder = getDecoderByInstance<unknown, SDK>(object);
    return decoder.fromSDKJSON!(object);
  }
  static toSDK<T = unknown, SDK = unknown>(object: T): SDK {
    const decoder = getDecoderByInstance<T, SDK>(object);
    return decoder.toSDK!(object);
  }
  static fromAmino<T = unknown, Amino = unknown>(object: Amino): T {
    const decoder = getDecoderByInstance<T, unknown, Amino>(object);
    return decoder.fromAmino!(object);
  }
  static fromAminoMsg<T = unknown, Amino = unknown>(object: AnyAmino): T {
    const decoder = GlobalDecoderRegistry.getDecoderByAminoType<
      T,
      unknown,
      Amino
    >(object.type);

    if (!decoder) {
      throw new Error(`There's no decoder for the amino type ${object.type}`);
    }

    return decoder.fromAminoMsg!(object);
  }
  static toAmino<T = unknown, Amino = unknown>(object: T): Amino {
    let data: any;
    let decoder;
    if (Any.is(object)) {
      data = GlobalDecoderRegistry.unwrapAny(object);

      decoder = GlobalDecoderRegistry.getDecoder(object.typeUrl);

      if (!decoder) {
        decoder = Any;
      }
    } else {
      data = object;
      decoder = getDecoderByInstance<T, unknown, Amino>(object);
    }

    return decoder.toAmino!(data);
  }
  static toAminoMsg<T = unknown, Amino = unknown>(object: T): AnyAmino {
    let data: any;
    let decoder;
    if (Any.is(object)) {
      data = GlobalDecoderRegistry.unwrapAny(object);

      decoder = GlobalDecoderRegistry.getDecoder(object.typeUrl);

      if (!decoder) {
        decoder = Any;
      }
    } else {
      data = object;
      decoder = getDecoderByInstance<T, unknown, Amino>(object);
    }

    return decoder.toAminoMsg!(data);
  }
}

function getDecoderByInstance<T = unknown, SDK = unknown, Amino = unknown>(
  obj: unknown
): TelescopeGeneratedCodec<T, SDK, Amino> {
  const decoder = GlobalDecoderRegistry.getDecoderByInstance<T, SDK, Amino>(
    obj
  );

  if (!decoder) {
    throw new Error(
      `There's no decoder for the instance ${JSON.stringify(obj)}`
    );
  }

  return decoder;
}

GlobalDecoderRegistry.register(Any.typeUrl, Any);
