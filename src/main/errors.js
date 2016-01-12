/*
 * Minio Javascript Library for Amazon S3 Compatible Cloud Storage, (C) 2015 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class ExtendableError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    Error.captureStackTrace(this, this.constructor.name)
  }
}

export class AnonymousRequestError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class InvalidArgumentError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class InvalidPortError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class InvalidEndPointError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class InvalidBucketNameError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class InvalidObjectNameError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class AccessKeyRequiredError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class SecretKeyRequiredError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

// if neither http not https
export class InvalidProtocolError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class ExpiresParamError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class InvalidACLError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class InvalidDateError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class InvalidPrefixError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class IncorrectSizeError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

export class InvalidXMLError extends ExtendableError {
  constructor(message) {
    super(message)
  }
}

// we throw S3Error instance for errors returned from S3 server
// see getErrorTransformer for details
export class S3Error extends ExtendableError {
  constructor(message) {
    super(message)
  }
}
