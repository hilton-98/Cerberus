package com.expensehound.backend.controller.proto;

import org.springframework.stereotype.Component;

import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.util.JsonFormat;

import proto.user.UserRequest;

@Component
public class UserProtoTranslator {
   public UserRequest getUserRequest(String requestBody) throws InvalidProtocolBufferException {
      UserRequest.Builder userRequestBuilder = UserRequest.newBuilder();
      JsonFormat.parser().ignoringUnknownFields().merge(requestBody, userRequestBuilder);
      return userRequestBuilder.build();
	}
}
