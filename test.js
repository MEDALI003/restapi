[nodemon] restarting due to changes...
[1] [nodemon] starting `node server.js`
[1] the server is running on PORT 8000
[1] connected to db!
[1] [nodemon] restarting due to changes...
[1] [nodemon] starting `node server.js`
[1] the server is running on PORT 8000
[1] connected to db!
[1] <ref *2> IncomingMessage {
[1]   _readableState: ReadableState {
[1]     objectMode: false,
[1]     highWaterMark: 16384,
[1]     buffer: BufferList { head: null, tail: null, length: 0 },
[1]     length: 0,
[1]     pipes: [],
[1]     flowing: null,
[1]     ended: false,
[1]     endEmitted: false,
[1]     reading: false,
[1]     constructed: true,
[1]     sync: true,
[1]     needReadable: false,
[1]     emittedReadable: false,
[1]     readableListening: false,
[1]     resumeScheduled: false,
[1]     errorEmitted: false,
[1]     emitClose: true,
[1]     autoDestroy: true,
[1]     destroyed: false,
[1]     errored: null,
[1]     closed: false,
[1]     closeEmitted: false,
[1]     defaultEncoding: 'utf8',
[1]     awaitDrainWriters: null,
[1]     multiAwaitDrain: false,
[1]     readingMore: true,
[1]     dataEmitted: false,
[1]     decoder: null,
[1]     encoding: null,
[1]     [Symbol(kPaused)]: null
[1]   },
[1]   _events: [Object: null prototype] {},
[1]   _eventsCount: 0,
[1]   _maxListeners: undefined,
[1]   socket: <ref *1> Socket {
[1]     connecting: false,
[1]     _hadError: false,
[1]     _parent: null,
[1]     _host: null,
[1]     _closeAfterHandlingError: false,
[1]     _readableState: ReadableState {
[1]       objectMode: false,
[1]       highWaterMark: 16384,
[1]       buffer: BufferList { head: null, tail: null, length: 0 },
[1]       length: 0,
[1]       pipes: [],
[1]       flowing: true,
[1]       ended: false,
[1]       endEmitted: false,
[1]       reading: true,
[1]       constructed: true,
[1]       sync: false,
[1]       needReadable: true,
[1]       emittedReadable: false,
[1]       readableListening: false,
[1]       resumeScheduled: false,
[1]       errorEmitted: false,
[1]       emitClose: false,
[1]       autoDestroy: true,
[1]       destroyed: false,
[1]       errored: null,
[1]       closed: false,
[1]       closeEmitted: false,
[1]       defaultEncoding: 'utf8',
[1]       awaitDrainWriters: null,
[1]       multiAwaitDrain: false,
[1]       readingMore: false,
[1]       dataEmitted: false,
[1]       decoder: null,
[1]       encoding: null,
[1]       [Symbol(kPaused)]: false
[1]     },
[1]     _events: [Object: null prototype] {
[1]       end: [Array],
[1]       timeout: [Function: socketOnTimeout],
[1]       data: [Function: bound socketOnData],
[1]       error: [Function: socketOnError],
[1]       close: [Array],
[1]       drain: [Function: bound socketOnDrain],
[1]       resume: [Function: onSocketResume],
[1]       pause: [Function: onSocketPause]
[1]     },
[1]     _eventsCount: 8,
[1]     _maxListeners: undefined,
[1]     _writableState: WritableState {
[1]       objectMode: false,
[1]       highWaterMark: 16384,
[1]       finalCalled: false,
[1]       needDrain: false,
[1]       ending: false,
[1]       ended: false,
[1]       finished: false,
[1]       destroyed: false,
[1]       decodeStrings: false,
[1]       defaultEncoding: 'utf8',
[1]       length: 0,
[1]       writing: false,
[1]       corked: 0,
[1]       sync: true,
[1]       bufferProcessing: false,
[1]       onwrite: [Function: bound onwrite],
[1]       writecb: null,
[1]       writelen: 0,
[1]       afterWriteTickInfo: null,
[1]       buffered: [],
[1]       bufferedIndex: 0,
[1]       allBuffers: true,
[1]       allNoop: true,
[1]       pendingcb: 0,
[1]       constructed: true,
[1]       prefinished: false,
[1]       errorEmitted: false,
[1]       emitClose: false,
[1]       autoDestroy: true,
[1]       errored: null,
[1]       closed: false,
[1]       closeEmitted: false,
[1]       [Symbol(kOnFinished)]: []
[1]     },
[1]     allowHalfOpen: true,
[1]     _sockname: null,
[1]     _pendingData: null,
[1]     _pendingEncoding: '',
[1]     server: Server {
[1]       maxHeaderSize: undefined,
[1]       insecureHTTPParser: undefined,
[1]       requestTimeout: 300000,
[1]       headersTimeout: 60000,
[1]       keepAliveTimeout: 5000,
[1]       connectionsCheckingInterval: 30000,
[1]       requireHostHeader: true,
[1]       joinDuplicateHeaders: undefined,
[1]       rejectNonStandardBodyWrites: false,
[1]       _events: [Object: null prototype],
[1]       _eventsCount: 2,
[1]       _maxListeners: undefined,
[1]       _connections: 1,
[1]       _handle: [TCP],
[1]       _usingWorkers: false,
[1]       _workers: [],
[1]       _unref: false,
[1]       allowHalfOpen: true,
[1]       pauseOnConnect: false,
[1]       noDelay: true,
[1]       keepAlive: false,
[1]       keepAliveInitialDelay: 0,
[1]       highWaterMark: 16384,
[1]       httpAllowHalfOpen: false,
[1]       timeout: 0,
[1]       maxHeadersCount: null,
[1]       maxRequestsPerSocket: 0,
[1]       _connectionKey: '6::::8000',
[1]       [Symbol(IncomingMessage)]: [Function: IncomingMessage],
[1]       [Symbol(ServerResponse)]: [Function: ServerResponse],
[1]       [Symbol(kCapture)]: false,
[1]       [Symbol(async_id_symbol)]: 12,
[1]       [Symbol(http.server.connections)]: ConnectionsList {},
[1]       [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
[1]         _idleTimeout: 30000,
[1]         _idlePrev: [TimersList],
[1]         _idleNext: [TimersList],
[1]         _idleStart: 333,
[1]         _onTimeout: [Function: bound checkConnections],
[1]         _timerArgs: undefined,
[1]         _repeat: 30000,
[1]         _destroyed: false,
[1]         [Symbol(refed)]: false,
[1]         [Symbol(kHasPrimitive)]: false,
[1]         [Symbol(asyncId)]: 11,
[1]         [Symbol(triggerId)]: 1
[1]       },
[1]       [Symbol(kUniqueHeaders)]: null
[1]     },
[1]     _server: Server {
[1]       maxHeaderSize: undefined,
[1]       insecureHTTPParser: undefined,
[1]       requestTimeout: 300000,
[1]       headersTimeout: 60000,
[1]       keepAliveTimeout: 5000,
[1]       connectionsCheckingInterval: 30000,
[1]       requireHostHeader: true,
[1]       joinDuplicateHeaders: undefined,
[1]       rejectNonStandardBodyWrites: false,
[1]       _events: [Object: null prototype],
[1]       _eventsCount: 2,
[1]       _maxListeners: undefined,
[1]       _connections: 1,
[1]       _handle: [TCP],
[1]       _usingWorkers: false,
[1]       _workers: [],
[1]       _unref: false,
[1]       allowHalfOpen: true,
[1]       pauseOnConnect: false,
[1]       noDelay: true,
[1]       keepAlive: false,
[1]       keepAliveInitialDelay: 0,
[1]       highWaterMark: 16384,
[1]       httpAllowHalfOpen: false,
[1]       timeout: 0,
[1]       maxHeadersCount: null,
[1]       maxRequestsPerSocket: 0,
[1]       _connectionKey: '6::::8000',
[1]       [Symbol(IncomingMessage)]: [Function: IncomingMessage],
[1]       [Symbol(ServerResponse)]: [Function: ServerResponse],
[1]       [Symbol(kCapture)]: false,
[1]       [Symbol(async_id_symbol)]: 12,
[1]       [Symbol(http.server.connections)]: ConnectionsList {},
[1]       [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
[1]         _idleTimeout: 30000,
[1]         _idlePrev: [TimersList],
[1]         _idleNext: [TimersList],
[1]         _idleStart: 333,
[1]         _onTimeout: [Function: bound checkConnections],
[1]         _timerArgs: undefined,
[1]         _repeat: 30000,
[1]         _destroyed: false,
[1]         [Symbol(refed)]: false,
[1]         [Symbol(kHasPrimitive)]: false,
[1]         [Symbol(asyncId)]: 11,
[1]         [Symbol(triggerId)]: 1
[1]       },
[1]       [Symbol(kUniqueHeaders)]: null
[1]     },
[1]     parser: HTTPParser {
[1]       '0': null,
[1]       '1': [Function: parserOnHeaders],
[1]       '2': [Function: parserOnHeadersComplete],
[1]       '3': [Function: parserOnBody],
[1]       '4': [Function: parserOnMessageComplete],
[1]       '5': [Function: bound onParserExecute],
[1]       '6': [Function: bound onParserTimeout],
[1]       _headers: [],
[1]       _url: '',
[1]       socket: [Circular *1],
[1]       incoming: [Circular *2],
[1]       outgoing: null,
[1]       maxHeaderPairs: 2000,
[1]       _consumed: true,
[1]       onIncoming: [Function: bound parserOnIncoming],
[1]       joinDuplicateHeaders: null,
[1]       [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
[1]     },
[1]     on: [Function: socketListenerWrap],
[1]     addListener: [Function: socketListenerWrap],
[1]     prependListener: [Function: socketListenerWrap],
[1]     setEncoding: [Function: socketSetEncoding],
[1]     _paused: false,
[1]     _httpMessage: ServerResponse {
[1]       _events: [Object: null prototype],
[1]       _eventsCount: 1,
[1]       _maxListeners: undefined,
[1]       outputData: [],
[1]       outputSize: 0,
[1]       writable: true,
[1]       destroyed: false,
[1]       _last: false,
[1]       chunkedEncoding: false,
[1]       shouldKeepAlive: true,
[1]       maxRequestsOnConnectionReached: false,
[1]       _defaultKeepAlive: true,
[1]       useChunkedEncodingByDefault: true,
[1]       sendDate: true,
[1]       _removedConnection: false,
[1]       _removedContLen: false,
[1]       _removedTE: false,
[1]       strictContentLength: false,
[1]       _contentLength: null,
[1]       _hasBody: true,
[1]       _trailer: '',
[1]       finished: false,
[1]       _headerSent: false,
[1]       _closed: false,
[1]       socket: [Circular *1],
[1]       _header: null,
[1]       _keepAliveTimeout: 5000,
[1]       _onPendingData: [Function: bound updateOutgoingData],
[1]       req: [Circular *2],
[1]       _sent100: false,
[1]       _expect_continue: false,
[1]       _maxRequestsPerSocket: 0,
[1]       locals: [Object: null prototype] {},
[1]       [Symbol(kCapture)]: false,
[1]       [Symbol(kBytesWritten)]: 0,
[1]       [Symbol(kNeedDrain)]: false,
[1]       [Symbol(corked)]: 0,
[1]       [Symbol(kOutHeaders)]: [Object: null prototype],
[1]       [Symbol(errored)]: null,
[1]       [Symbol(kHighWaterMark)]: 16384,
[1]       [Symbol(kRejectNonStandardBodyWrites)]: false,
[1]       [Symbol(kUniqueHeaders)]: null
[1]     },
[1]     [Symbol(async_id_symbol)]: 139,
[1]     [Symbol(kHandle)]: TCP {
[1]       reading: true,
[1]       onconnection: null,
[1]       _consumed: true,
[1]       [Symbol(owner_symbol)]: [Circular *1]
[1]     },
[1]     [Symbol(lastWriteQueueSize)]: 0,
[1]     [Symbol(timeout)]: null,
[1]     [Symbol(kBuffer)]: null,
[1]     [Symbol(kBufferCb)]: null,
[1]     [Symbol(kBufferGen)]: null,
[1]     [Symbol(kCapture)]: false,
[1]     [Symbol(kSetNoDelay)]: true,
[1]     [Symbol(kSetKeepAlive)]: false,
[1]     [Symbol(kSetKeepAliveInitialDelay)]: 0,
[1]     [Symbol(kBytesRead)]: 0,
[1]     [Symbol(kBytesWritten)]: 0
[1]   },
[1]   httpVersionMajor: 1,
[1]   httpVersionMinor: 1,
[1]   httpVersion: '1.1',
[1]   complete: false,
[1]   rawHeaders: [
[1]     'Host',
[1]     'localhost:8000',
[1]     'Connection',
[1]     'keep-alive',
[1]     'Content-Length',
[1]     '164',
[1]     'sec-ch-ua',
[1]     '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
[1]     'Accept',
[1]     'application/json, text/plain, */*',
[1]     'Content-Type',
[1]     'multipart/form-data; boundary=----WebKitFormBoundarySw8IYvunEAjeeUWQ',
[1]     'sec-ch-ua-mobile',
[1]     '?1',
[1]     'User-Agent',
[1]     'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
[1]     'sec-ch-ua-platform',
[1]     '"Android"',
[1]     'Origin',
[1]     'http://localhost:3000',
[1]     'Sec-Fetch-Site',
[1]     'same-site',
[1]     'Sec-Fetch-Mode',
[1]     'cors',
[1]     'Sec-Fetch-Dest',
[1]     'empty',
[1]     'Referer',
[1]     'http://localhost:3000/',
[1]     'Accept-Encoding',
[1]     'gzip, deflate, br, zstd',
[1]     'Accept-Language',
[1]     'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7'
[1]   ],
[1]   rawTrailers: [],
[1]   joinDuplicateHeaders: null,
[1]   aborted: false,
[1]   upgrade: false,
[1]   url: '/imageUrl',
[1]   method: 'POST',
[1]   statusCode: null,
[1]   statusMessage: null,
[1]   client: <ref *1> Socket {
[1]     connecting: false,
[1]     _hadError: false,
[1]     _parent: null,
[1]     _host: null,
[1]     _closeAfterHandlingError: false,
[1]     _readableState: ReadableState {
[1]       objectMode: false,
[1]       highWaterMark: 16384,
[1]       buffer: BufferList { head: null, tail: null, length: 0 },
[1]       length: 0,
[1]       pipes: [],
[1]       flowing: true,
[1]       ended: false,
[1]       endEmitted: false,
[1]       reading: true,
[1]       constructed: true,
[1]       sync: false,
[1]       needReadable: true,
[1]       emittedReadable: false,
[1]       readableListening: false,
[1]       resumeScheduled: false,
[1]       errorEmitted: false,
[1]       emitClose: false,
[1]       autoDestroy: true,
[1]       destroyed: false,
[1]       errored: null,
[1]       closed: false,
[1]       closeEmitted: false,
[1]       defaultEncoding: 'utf8',
[1]       awaitDrainWriters: null,
[1]       multiAwaitDrain: false,
[1]       readingMore: false,
[1]       dataEmitted: false,
[1]       decoder: null,
[1]       encoding: null,
[1]       [Symbol(kPaused)]: false
[1]     },
[1]     _events: [Object: null prototype] {
[1]       end: [Array],
[1]       timeout: [Function: socketOnTimeout],
[1]       data: [Function: bound socketOnData],
[1]       error: [Function: socketOnError],
[1]       close: [Array],
[1]       drain: [Function: bound socketOnDrain],
[1]       resume: [Function: onSocketResume],
[1]       pause: [Function: onSocketPause]
[1]     },
[1]     _eventsCount: 8,
[1]     _maxListeners: undefined,
[1]     _writableState: WritableState {
[1]       objectMode: false,
[1]       highWaterMark: 16384,
[1]       finalCalled: false,
[1]       needDrain: false,
[1]       ending: false,
[1]       ended: false,
[1]       finished: false,
[1]       destroyed: false,
[1]       decodeStrings: false,
[1]       defaultEncoding: 'utf8',
[1]       length: 0,
[1]       writing: false,
[1]       corked: 0,
[1]       sync: true,
[1]       bufferProcessing: false,
[1]       onwrite: [Function: bound onwrite],
[1]       writecb: null,
[1]       writelen: 0,
[1]       afterWriteTickInfo: null,
[1]       buffered: [],
[1]       bufferedIndex: 0,
[1]       allBuffers: true,
[1]       allNoop: true,
[1]       pendingcb: 0,
[1]       constructed: true,
[1]       prefinished: false,
[1]       errorEmitted: false,
[1]       emitClose: false,
[1]       autoDestroy: true,
[1]       errored: null,
[1]       closed: false,
[1]       closeEmitted: false,
[1]       [Symbol(kOnFinished)]: []
[1]     },
[1]     allowHalfOpen: true,
[1]     _sockname: null,
[1]     _pendingData: null,
[1]     _pendingEncoding: '',
[1]     server: Server {
[1]       maxHeaderSize: undefined,
[1]       insecureHTTPParser: undefined,
[1]       requestTimeout: 300000,
[1]       headersTimeout: 60000,
[1]       keepAliveTimeout: 5000,
[1]       connectionsCheckingInterval: 30000,
[1]       requireHostHeader: true,
[1]       joinDuplicateHeaders: undefined,
[1]       rejectNonStandardBodyWrites: false,
[1]       _events: [Object: null prototype],
[1]       _eventsCount: 2,
[1]       _maxListeners: undefined,
[1]       _connections: 1,
[1]       _handle: [TCP],
[1]       _usingWorkers: false,
[1]       _workers: [],
[1]       _unref: false,
[1]       allowHalfOpen: true,
[1]       pauseOnConnect: false,
[1]       noDelay: true,
[1]       keepAlive: false,
[1]       keepAliveInitialDelay: 0,
[1]       highWaterMark: 16384,
[1]       httpAllowHalfOpen: false,
[1]       timeout: 0,
[1]       maxHeadersCount: null,
[1]       maxRequestsPerSocket: 0,
[1]       _connectionKey: '6::::8000',
[1]       [Symbol(IncomingMessage)]: [Function: IncomingMessage],
[1]       [Symbol(ServerResponse)]: [Function: ServerResponse],
[1]       [Symbol(kCapture)]: false,
[1]       [Symbol(async_id_symbol)]: 12,
[1]       [Symbol(http.server.connections)]: ConnectionsList {},
[1]       [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
[1]         _idleTimeout: 30000,
[1]         _idlePrev: [TimersList],
[1]         _idleNext: [TimersList],
[1]         _idleStart: 333,
[1]         _onTimeout: [Function: bound checkConnections],
[1]         _timerArgs: undefined,
[1]         _repeat: 30000,
[1]         _destroyed: false,
[1]         [Symbol(refed)]: false,
[1]         [Symbol(kHasPrimitive)]: false,
[1]         [Symbol(asyncId)]: 11,
[1]         [Symbol(triggerId)]: 1
[1]       },
[1]       [Symbol(kUniqueHeaders)]: null
[1]     },
[1]     _server: Server {
[1]       maxHeaderSize: undefined,
[1]       insecureHTTPParser: undefined,
[1]       requestTimeout: 300000,
[1]       headersTimeout: 60000,
[1]       keepAliveTimeout: 5000,
[1]       connectionsCheckingInterval: 30000,
[1]       requireHostHeader: true,
[1]       joinDuplicateHeaders: undefined,
[1]       rejectNonStandardBodyWrites: false,
[1]       _events: [Object: null prototype],
[1]       _eventsCount: 2,
[1]       _maxListeners: undefined,
[1]       _connections: 1,
[1]       _handle: [TCP],
[1]       _usingWorkers: false,
[1]       _workers: [],
[1]       _unref: false,
[1]       allowHalfOpen: true,
[1]       pauseOnConnect: false,
[1]       noDelay: true,
[1]       keepAlive: false,
[1]       keepAliveInitialDelay: 0,
[1]       highWaterMark: 16384,
[1]       httpAllowHalfOpen: false,
[1]       timeout: 0,
[1]       maxHeadersCount: null,
[1]       maxRequestsPerSocket: 0,
[1]       _connectionKey: '6::::8000',
[1]       [Symbol(IncomingMessage)]: [Function: IncomingMessage],
[1]       [Symbol(ServerResponse)]: [Function: ServerResponse],
[1]       [Symbol(kCapture)]: false,
[1]       [Symbol(async_id_symbol)]: 12,
[1]       [Symbol(http.server.connections)]: ConnectionsList {},
[1]       [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
[1]         _idleTimeout: 30000,
[1]         _idlePrev: [TimersList],
[1]         _idleNext: [TimersList],
[1]         _idleStart: 333,
[1]         _onTimeout: [Function: bound checkConnections],
[1]         _timerArgs: undefined,
[1]         _repeat: 30000,
[1]         _destroyed: false,
[1]         [Symbol(refed)]: false,
[1]         [Symbol(kHasPrimitive)]: false,
[1]         [Symbol(asyncId)]: 11,
[1]         [Symbol(triggerId)]: 1
[1]       },
[1]       [Symbol(kUniqueHeaders)]: null
[1]     },
[1]     parser: HTTPParser {
[1]       '0': null,
[1]       '1': [Function: parserOnHeaders],
[1]       '2': [Function: parserOnHeadersComplete],
[1]       '3': [Function: parserOnBody],
[1]       '4': [Function: parserOnMessageComplete],
[1]       '5': [Function: bound onParserExecute],
[1]       '6': [Function: bound onParserTimeout],
[1]       _headers: [],
[1]       _url: '',
[1]       socket: [Circular *1],
[1]       incoming: [Circular *2],
[1]       outgoing: null,
[1]       maxHeaderPairs: 2000,
[1]       _consumed: true,
[1]       onIncoming: [Function: bound parserOnIncoming],
[1]       joinDuplicateHeaders: null,
[1]       [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
[1]     },
[1]     on: [Function: socketListenerWrap],
[1]     addListener: [Function: socketListenerWrap],
[1]     prependListener: [Function: socketListenerWrap],
[1]     setEncoding: [Function: socketSetEncoding],
[1]     _paused: false,
[1]     _httpMessage: ServerResponse {
[1]       _events: [Object: null prototype],
[1]       _eventsCount: 1,
[1]       _maxListeners: undefined,
[1]       outputData: [],
[1]       outputSize: 0,
[1]       writable: true,
[1]       destroyed: false,
[1]       _last: false,
[1]       chunkedEncoding: false,
[1]       shouldKeepAlive: true,
[1]       maxRequestsOnConnectionReached: false,
[1]       _defaultKeepAlive: true,
[1]       useChunkedEncodingByDefault: true,
[1]       sendDate: true,
[1]       _removedConnection: false,
[1]       _removedContLen: false,
[1]       _removedTE: false,
[1]       strictContentLength: false,
[1]       _contentLength: null,
[1]       _hasBody: true,
[1]       _trailer: '',
[1]       finished: false,
[1]       _headerSent: false,
[1]       _closed: false,
[1]       socket: [Circular *1],
[1]       _header: null,
[1]       _keepAliveTimeout: 5000,
[1]       _onPendingData: [Function: bound updateOutgoingData],
[1]       req: [Circular *2],
[1]       _sent100: false,
[1]       _expect_continue: false,
[1]       _maxRequestsPerSocket: 0,
[1]       locals: [Object: null prototype] {},
[1]       [Symbol(kCapture)]: false,
[1]       [Symbol(kBytesWritten)]: 0,
[1]       [Symbol(kNeedDrain)]: false,
[1]       [Symbol(corked)]: 0,
[1]       [Symbol(kOutHeaders)]: [Object: null prototype],
[1]       [Symbol(errored)]: null,
[1]       [Symbol(kHighWaterMark)]: 16384,
[1]       [Symbol(kRejectNonStandardBodyWrites)]: false,
[1]       [Symbol(kUniqueHeaders)]: null
[1]     },
[1]     [Symbol(async_id_symbol)]: 139,
[1]     [Symbol(kHandle)]: TCP {
[1]       reading: true,
[1]       onconnection: null,
[1]       _consumed: true,
[1]       [Symbol(owner_symbol)]: [Circular *1]
[1]     },
[1]     [Symbol(lastWriteQueueSize)]: 0,
[1]     [Symbol(timeout)]: null,
[1]     [Symbol(kBuffer)]: null,
[1]     [Symbol(kBufferCb)]: null,
[1]     [Symbol(kBufferGen)]: null,
[1]     [Symbol(kCapture)]: false,
[1]     [Symbol(kSetNoDelay)]: true,
[1]     [Symbol(kSetKeepAlive)]: false,
[1]     [Symbol(kSetKeepAliveInitialDelay)]: 0,
[1]     [Symbol(kBytesRead)]: 0,
[1]     [Symbol(kBytesWritten)]: 0
[1]   },
[1]   _consuming: false,
[1]   _dumped: false,
[1]   next: [Function: next],
[1]   baseUrl: '/api/user',
[1]   originalUrl: '/api/user/imageUrl',
[1]   _parsedUrl: Url {
[1]     protocol: null,
[1]     slashes: null,
[1]     auth: null,
[1]     host: null,
[1]     port: null,
[1]     hostname: null,
[1]     hash: null,
[1]     search: null,
[1]     query: null,
[1]     pathname: '/imageUrl',
[1]     path: '/imageUrl',
[1]     href: '/imageUrl',
[1]     _raw: '/imageUrl'
[1]   },
[1]   params: {},
[1]   query: {},
[1]   res: <ref *3> ServerResponse {
[1]     _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
[1]     _eventsCount: 1,
[1]     _maxListeners: undefined,
[1]     outputData: [],
[1]     outputSize: 0,
[1]     writable: true,
[1]     destroyed: false,
[1]     _last: false,
[1]     chunkedEncoding: false,
[1]     shouldKeepAlive: true,
[1]     maxRequestsOnConnectionReached: false,
[1]     _defaultKeepAlive: true,
[1]     useChunkedEncodingByDefault: true,
[1]     sendDate: true,
[1]     _removedConnection: false,
[1]     _removedContLen: false,
[1]     _removedTE: false,
[1]     strictContentLength: false,
[1]     _contentLength: null,
[1]     _hasBody: true,
[1]     _trailer: '',
[1]     finished: false,
[1]     _headerSent: false,
[1]     _closed: false,
[1]     socket: <ref *1> Socket {
[1]       connecting: false,
[1]       _hadError: false,
[1]       _parent: null,
[1]       _host: null,
[1]       _closeAfterHandlingError: false,
[1]       _readableState: [ReadableState],
[1]       _events: [Object: null prototype],
[1]       _eventsCount: 8,
[1]       _maxListeners: undefined,
[1]       _writableState: [WritableState],
[1]       allowHalfOpen: true,
[1]       _sockname: null,
[1]       _pendingData: null,
[1]       _pendingEncoding: '',
[1]       server: [Server],
[1]       _server: [Server],
[1]       parser: [HTTPParser],
[1]       on: [Function: socketListenerWrap],
[1]       addListener: [Function: socketListenerWrap],
[1]       prependListener: [Function: socketListenerWrap],
[1]       setEncoding: [Function: socketSetEncoding],
[1]       _paused: false,
[1]       _httpMessage: [Circular *3],
[1]       [Symbol(async_id_symbol)]: 139,
[1]       [Symbol(kHandle)]: [TCP],
[1]       [Symbol(lastWriteQueueSize)]: 0,
[1]       [Symbol(timeout)]: null,
[1]       [Symbol(kBuffer)]: null,
[1]       [Symbol(kBufferCb)]: null,
[1]       [Symbol(kBufferGen)]: null,
[1]       [Symbol(kCapture)]: false,
[1]       [Symbol(kSetNoDelay)]: true,
[1]       [Symbol(kSetKeepAlive)]: false,
[1]       [Symbol(kSetKeepAliveInitialDelay)]: 0,
[1]       [Symbol(kBytesRead)]: 0,
[1]       [Symbol(kBytesWritten)]: 0
[1]     },
[1]     _header: null,
[1]     _keepAliveTimeout: 5000,
[1]     _onPendingData: [Function: bound updateOutgoingData],
[1]     req: [Circular *2],
[1]     _sent100: false,
[1]     _expect_continue: false,
[1]     _maxRequestsPerSocket: 0,
[1]     locals: [Object: null prototype] {},
[1]     [Symbol(kCapture)]: false,
[1]     [Symbol(kBytesWritten)]: 0,
[1]     [Symbol(kNeedDrain)]: false,
[1]     [Symbol(corked)]: 0,
[1]     [Symbol(kOutHeaders)]: [Object: null prototype] {
[1]       'x-powered-by': [Array],
[1]       'access-control-allow-origin': [Array],
[1]       'access-control-allow-credentials': [Array]
[1]     },
[1]     [Symbol(errored)]: null,
[1]     [Symbol(kHighWaterMark)]: 16384,
[1]     [Symbol(kRejectNonStandardBodyWrites)]: false,
[1]     [Symbol(kUniqueHeaders)]: null
[1]   },
[1]   body: {},
[1]   route: Route {
[1]     path: '/imageUrl',
[1]     stack: [ [Layer] ],
[1]     methods: { post: true }
[1]   },
[1]   [Symbol(kCapture)]: false,
[1]   [Symbol(kHeaders)]: {
[1]     host: 'localhost:8000',
[1]     connection: 'keep-alive',
[1]     'content-length': '164',
[1]     'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
[1]     accept: 'application/json, text/plain, */*',
[1]     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarySw8IYvunEAjeeUWQ',
[1]     'sec-ch-ua-mobile': '?1',
[1]     'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
[1]     'sec-ch-ua-platform': '"Android"',
[1]     origin: 'http://localhost:3000',
[1]     'sec-fetch-site': 'same-site',
[1]     'sec-fetch-mode': 'cors',
[1]     'sec-fetch-dest': 'empty',
[1]     referer: 'http://localhost:3000/',
[1]     'accept-encoding': 'gzip, deflate, br, zstd',
[1]     'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7'
[1]   },
[1]   [Symbol(kHeadersCount)]: 32,
[1]   [Symbol(kTrailers)]: null,
[1]   [Symbol(kTrailersCount)]: 0
[1] }
