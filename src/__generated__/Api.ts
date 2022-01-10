/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BookmarkCreate {
  content: {
    action: { pageIndex?: number; type: string; uri?: string }
    name: string
    pdfBookmarkId?: string
    sortKey?: string
    type: 'pspdfkit/bookmark'
    v: number
  }
  id: string
}

/**
 * @example email-address
 */
export type SearchPreset =
  | 'credit-card-number'
  | 'date'
  | 'email-address'
  | 'international-phone-number'
  | 'ipv4'
  | 'ipv6'
  | 'mac-address'
  | 'north-american-phone-number'
  | 'social-security-number'
  | 'time'
  | 'url'
  | 'us-zip-code'
  | 'vin'

export interface RedactionsCreateStrategyOptionsText {
  /**
   * Determines if the search will be case sensitive.
   *
   */
  caseSensitive?: boolean

  /**
   * Determines if redaction annotations are created on top of annotations whose
   * content match the provided preset.
   *
   */
  includeAnnotations?: boolean

  /** @example @pspdfkit.com */
  regex?: string
}

export interface DocumentInfo {
  /**
   * The number of pages of the document.
   * @example 3
   */
  pageCount: number
  pages?: Page[]

  /**
   * The [document's permission](https://pspdfkit.com/guides/web/current/features/document-permissions/).
   *
   */
  permissions?: {
    annotationAndForms?: boolean
    assemble?: boolean
    extract?: boolean
    extractAccessibility?: boolean
    fillForms?: boolean
    modification?: boolean
    print?: boolean
    printHighQuality?: boolean
  }

  /** The document title. */
  title?: Title
}

/**
 * Represents an annotation to be created.
 */
export interface AnnotationCreate {
  /**
   * JSON representation of the annotation as described in
   * [the guides](https://pspdfkit.com/guides/server/current/server-api/json-format/#base-annotation-type).
   *
   * Depending on the value of `type` property, the annotation might include additional properties specific
   * to particular type.
   */
  content: AnnotationContent

  /**
   * The resource group.
   *
   * Group allows to grant access to resources via Collaboration Permissions.
   */
  group?: Group

  /** Annotation ID, unique in scope of a single Instant Layer. */
  id?: AnnotationId

  /**
   * The user identifier.
   *
   * Note that PSPDFKit Server does not provide any kind of user management and accepts
   * any string (or `null`) as a valid user ID.
   */
  user_id?: User
}

/**
 * A single search result.
 */
export interface SearchResult {
  /**
   * Currently always `false` - searching in annotations is not yet supported.
   * @example false
   */
  isAnnotation?: boolean

  /**
   * Index of the page where the text was found.
   * @min 0
   * @example 2
   */
  pageIndex: number

  /**
   * Sourrounding text of the search query.
   * @example PSPDFKit supports almost all PDF annotation types
   */
  previewText?: string

  /**
   * Location of the search query in the preview text. The first element of the array
   * is a 0-based position of its first character within the text, and the second
   * element is the query's length.
   *
   * @example [2,3]
   */
  rangeInPreview?: number[]

  /**
   * Bounding boxes of all occurences of the query within the text in page
   * coordinates.
   *
   */
  rectsOnPage?: number[][]
}

export interface RedactionsCreateStrategyOptionsPreset {
  /**
   * Determines if redaction annotations are created on top of annotations whose
   * content match the provided preset.
   *
   */
  includeAnnotations?: boolean
  preset: SearchPreset
}

/**
 * SHA256 hash of the PDF file underlying the document.
 * @example 1defd934dbbf77587eb9b7f45d162d2a3aea16c840a9e7cfa190fb2ea1f40a76
 */
export type SourcePdfSha256 = string

export interface Bookmark {
  content?: {
    action: { pageIndex?: number; type: string; uri?: string }
    name: string
    pdfBookmarkId?: string
    sortKey?: string
    type: 'pspdfkit/bookmark'
    v: number
  }
  createdBy: string | null
  id: string
  updatedBy: string | null
}

/**
* SHA256 checksum of the PDF file.

When using the API to add a document from a URL, your backend storage must
always deliver the same file, since the SHA256 will never be recalculated after
the document is created. If the file on your storage backend changes and
PSPDFKit Server needs to refetch the file (e.g. because it’s no longer cached),
this will result in a `hash_mismatch` error on PSPDFKit Server.
*/
export type CreateDocumentSha256 = string

export interface OutlineElement {
  /**
   * Represents a PDF action.
   *
   * There are many different action types. You can learn more about their semantics
   * [here](https://pspdfkit.com/guides/ios/current/annotations/pdf-actions/).
   * All actions have a `type` property. Depending on the type, the action object
   * includes additional properties. The list of supported actions and their
   * structure is available
   * [under this link](https://pspdfkit.com/guides/server/current/server-api/json-format/?search=actions#action-types).
   */
  action?: Action

  /**
   * Array of outline elements nested under the current outline element.
   * @example []
   */
  children?: OutlineElement[]

  /**
   * Indicates whether the outline element's title is bold.
   * @example false
   */
  isBold?: boolean

  /**
   * Indicates whether the outline element is expanded.
   * @example true
   */
  isExpanded?: boolean

  /**
   * Indicates whether the outline element's title is italic.
   * @example false
   */
  isItalic?: boolean

  /** The outline element's title. */
  title?: string

  /** @example pspdfkit/outline-element */
  type: string
}

/**
 * Text of a comment
 * @example What a wonderful idea!
 */
export type CommentText = string | null

export interface DigitalSignatures {
  /** @format datetime */
  checkedAt?: string
  documentModifiedSinceSignature?: boolean
  signatures?: DigitalSignature[]
  status?: 'valid' | 'warning' | 'error'
}

/**
 * 0-based index of the page.
 * @min 0
 * @example 2
 */
export type PageIndex = number

/**
* Represents an operation which can be applied to a document.

There are many kinds of operations - you can learn more about their structure in
[the guides](https://pspdfkit.com/guides/server/current/server-api/json-format/#document-operations).
* @example {"pageIndexes":[0],"rotateBy":90,"type":"rotatePages"}
*/
export interface DocumentOperation {
  /**
   * The type of the operation.
   * @example rotatePages
   */
  type: string
}

export interface CommentsCreate {
  /** A list of comments to be added */
  comments: CommentCreate[]
}

export interface CommentsCreateErrors {
  /**
   * A list of errors encountered when creating comments.
   *
   * Each entry in the list represents errors for a single comment.
   */
  comments?: object[]
}

export interface RedactionsCreateStrategyOptionsRegex {
  /**
   * Determines if the search will be case sensitive.
   *
   */
  caseSensitive?: boolean

  /**
   * Determines if redaction annotations are created on top of annotations whose
   * content match the provided preset.
   *
   */
  includeAnnotations?: boolean

  /** @example @pspdfkit\\.com */
  regex: string
}

/**
* JSON representation of the annotation as described in
[the guides](https://pspdfkit.com/guides/server/current/server-api/json-format/#base-annotation-type).

Depending on the value of `type` property, the annotation might include additional properties specific
to particular type.
*/
export interface AnnotationContent {
  /**
   * Represents a PDF action.
   *
   * There are many different action types. You can learn more about their semantics
   * [here](https://pspdfkit.com/guides/ios/current/annotations/pdf-actions/).
   * All actions have a `type` property. Depending on the type, the action object
   * includes additional properties. The list of supported actions and their
   * structure is available
   * [under this link](https://pspdfkit.com/guides/server/current/server-api/json-format/?search=actions#action-types).
   */
  action?: Action

  /** Bounding box of the annotation within the page. */
  bbox: AnnotationBbox

  /** Date and time in ISO8601 format with timezone. */
  createdAt: IsoDateTime

  /** Name of the annotation creator. */
  creatorName?: AnnotationCreatorName

  /**
   * Array of annotation flags.
   *
   * See [the guides](https://pspdfkit.com/guides/server/current/server-api/json-format/#supported-annotations)
   * for more information.
   */
  flags?: AnnotationFlags

  /** Optional annotation name. */
  name?: AnnotationName

  /** Controls transparency of the annotation. */
  opacity: AnnotationOpacity

  /** 0-based index of the page. */
  pageIndex: PageIndex

  /** Annotation's object ID from the source PDF file. */
  pdfObjectId?: AnnotationPdfObjectId

  /**
   * The [annotation type](https://pspdfkit.com/guides/server/current/server-api/json-format/#supported-annotations).
   *
   */
  type: AnnotationType

  /** Date and time in ISO8601 format with timezone. */
  updatedAt: IsoDateTime

  /** Annotation spec version, currently always `1`. */
  v: AnnotationSpecVersion
}

/**
 * A list of annotation ids to remove.
 */
export type AnnotationIdsList = string[]

/**
 * ISO8601 timestamp of when the comment was written
 * @example 2019-11-14T15:05:03.089Z
 */
export type CommentCreatedAt = string

/**
* A piece highlighted text along with corresponding
[markup annotation](https://pspdfkit.com/guides/server/current/server-api/json-format/#pspdfkit-markup-highlight-squiggly-strikeout-underline).
*/
export interface HighlightedText {
  /**
   * Represents a PDF annotation.
   *
   */
  annotation: Annotation

  /**
   * The highlighted text.
   * @example a very important piece of content
   */
  text: string
}

export type SearchType = 'text' | 'regex' | 'preset'

/**
 * Object of arbitrary properties attached to an entity
 */
export type CustomData = object | null

/**
 * Annotation's object ID from the source PDF file.
 */
export type AnnotationPdfObjectId = string

/**
 * Annotation spec version, currently always `1`.
 * @example 1
 */
export type AnnotationSpecVersion = number

/**
 * The size of the document in bytes.
 * @min 1
 * @example 192000
 */
export type ByteSize = number

export interface CommentsCreatedWithRoot {
  data: { annotation: { id: AnnotationId }; comments: { id: CommentId }[] }
}

/**
 * Name of the comment author
 * @example John Doe
 */
export type CommentCreatorName = string | null

export interface CommentContent {
  /** ISO8601 timestamp of when the comment was written */
  createdAt: CommentCreatedAt

  /** Name of the comment author */
  creatorName: CommentCreatorName

  /** Object of arbitrary properties attached to an entity */
  customData: CustomData

  /** Text of a comment */
  text: CommentText

  /** ISO8601 timestamp of when the comment was edited */
  updatedAt: CommentUpdatedAt
}

export interface CommentsCreateErrorsWithRoot {
  /**
   * Errors encountered when creating root annotation.
   *
   * @example {"content":["is required"]}
   */
  annotation?: object

  /**
   * A list of errors encountered when creating comments.
   *
   * Each entry in the list represents errors for a single comment.
   */
  comments?: object[]
}

/**
 * Describes the strategy used when creating a batch of redaction annotations.
 */
export type RedactionsCreateStrategy = 'preset' | 'regex' | 'text'

/**
 * Represents a PDF annotation.
 */
export interface Annotation {
  /**
   * JSON representation of the annotation as described in
   * [the guides](https://pspdfkit.com/guides/server/current/server-api/json-format/#base-annotation-type).
   *
   * Depending on the value of `type` property, the annotation might include additional properties specific
   * to particular type.
   */
  content?: AnnotationContent

  /**
   * The user identifier.
   *
   * Note that PSPDFKit Server does not provide any kind of user management and accepts
   * any string (or `null`) as a valid user ID.
   */
  createdBy: User

  /**
   * The resource group.
   *
   * Group allows to grant access to resources via Collaboration Permissions.
   */
  group: Group

  /** Annotation ID, unique in scope of a single Instant Layer. */
  id: AnnotationId

  /**
   * The user identifier.
   *
   * Note that PSPDFKit Server does not provide any kind of user management and accepts
   * any string (or `null`) as a valid user ID.
   */
  updatedBy: User
}

export interface DeleteAnnotations {
  /** @example all */
  annotationIds: AnnotationIdsAll | AnnotationIdsList
}

export interface RedactionsCreateContent {
  /**
   * Color of the overlay text.
   *
   */
  color?: string

  /** Name of the annotation creator. */
  creatorName?: AnnotationCreatorName

  /** Object of arbitrary properties attached to an entity */
  customData?: CustomData

  /**
   * A color of redacted area after applying redactions.
   *
   */
  fillColor?: string

  /**
   * Color of the redaction annotation's outline before the redactions are applied.
   *
   */
  outlineColor?: string

  /**
   * Text on top of redacted area after applying redactions.
   *
   */
  overlayText?: string | null

  /**
   * Determines if the overlay text is repeated throughout the whole redacted area.
   *
   */
  repeatOverlayText?: boolean | null
}

export type RedactionsCreateStrategyOptions =
  | RedactionsCreateStrategyOptionsPreset
  | RedactionsCreateStrategyOptionsRegex
  | RedactionsCreateStrategyOptionsText

export interface Page {
  /**
   * Height of the page in points.
   * @example 842
   */
  height?: number

  /** 0-based index of the page. */
  pageIndex: PageIndex

  /**
   * Label of the page.
   * @example 1
   */
  pageLabel?: string

  /**
   * Clockwise rotation of the page.
   * @example 0
   */
  rotation?: 0 | 90 | 180 | 270

  /**
   * Width of the page in points.
   * @example 595
   */
  width?: number
}

/**
 * The [annotation type](https://pspdfkit.com/guides/server/current/server-api/json-format/#supported-annotations).
 * @example pspdfkit/markup/highlight
 */
export type AnnotationType = string

/**
 * ISO8601 timestamp of when the comment was edited
 * @example 2019-11-22T18:05:03.712Z
 */
export type CommentUpdatedAt = string | null

/**
* Absolute URL of the PDF document.

When using the API to add a document from a URL, your backend storage must
always deliver the same file, since the SHA256 will never be recalculated after
the document is created. If the file on your storage backend changes and
PSPDFKit Server needs to refetch the file (e.g. because it’s no longer cached),
this will result in a `hash_mismatch` error on PSPDFKit Server.
*/
export type CreateDocumentUrl = string

/**
* @example {
  "strategy": "preset",
  "strategyOptions": {
    "preset": "email-address"
  }
}

*/
export interface RedactionsCreate {
  content?: RedactionsCreateContent

  /**
   * Describes the strategy used when creating a batch of redaction annotations.
   *
   */
  strategy: RedactionsCreateStrategy
  strategyOptions: RedactionsCreateStrategyOptions

  /**
   * The user identifier.
   *
   * Note that PSPDFKit Server does not provide any kind of user management and accepts
   * any string (or `null`) as a valid user ID.
   */
  user_id?: User
}

export interface DocumentProperties {
  /** The size of the document in bytes. */
  byteSize: ByteSize

  /** Date and time in ISO8601 format with timezone. */
  createdAt: IsoDateTime

  /** Indicates whether the document is password protected. */
  passwordProtected: PasswordProtected

  /** SHA256 hash of the PDF file underlying the document. */
  sourcePdfSha256: SourcePdfSha256

  /**
   * Information about the assert storage for the underlying PDF file.
   *
   */
  storage?: {
    bucket?: string
    type: 'built-in' | 'local' | 'remote' | 's3'
    url?: string
  }

  /** The document title. */
  title: Title
}

/**
 * The ID of the document.
 * @example 7KPZW8XFGM4F1C92KWBK1B748M
 */
export type DocumentId = string

export interface CommentsCreated {
  data: { comments: { id: CommentId }[] }
}

/**
 * Date and time in ISO8601 format with timezone.
 * @example 2019-09-16T15:05:03.712909Z
 */
export type IsoDateTime = string

/**
* Represents a PDF action.

There are many different action types. You can learn more about their semantics
[here](https://pspdfkit.com/guides/ios/current/annotations/pdf-actions/).

All actions have a `type` property. Depending on the type, the action object
includes additional properties. The list of supported actions and their
structure is available
[under this link](https://pspdfkit.com/guides/server/current/server-api/json-format/?search=actions#action-types).
* @example {"pageIndex":3,"type":"goTo"}
*/
export interface Action {
  /**
   * The action type.
   * @example goTo
   */
  type: string
}

/**
* By default, a document added by a URL is not persistently stored in
PSPDFKit Server and will be fetched from the URL when necessary

If this is set to `true`, the document will be stored persistently.

Ignored when the document is not being created by a URL.
*/
export type CreateDocumentCopyAssetToStorageBackend = boolean

/**
 * An array of search results.
 */
export type SearchResults = SearchResult[]

/**
 * Annotation ID, unique in scope of a single Instant Layer.
 * @example 01DNEDPQQ22W49KDXRFPG4EPEQ
 */
export type AnnotationId = string

/**
* The user identifier.

Note that PSPDFKit Server does not provide any kind of user management and accepts
any string (or `null`) as a valid user ID.
*/
export type User = string | null

/**
 * A line of text on the document's page.
 */
export interface TextLine {
  /**
   * Contents of the line of text.
   * @example PSPDKit is a leading PDF SDK for Mobile and Web
   */
  contents: string

  /**
   * Height of the line of text in points.
   * @example 14
   */
  height?: number

  /**
   * Distance from the left edge of the page in points.
   * @example 79.02290344238281
   */
  left?: number

  /**
   * Distance from the top edge of the page in points.
   * @example 312.2259521484375
   */
  top?: number

  /**
   * Width of the line of text in points.
   * @example 331.7496337890625
   */
  width?: number
}

export interface DocumentCreated {
  /** Date and time in ISO8601 format with timezone. */
  createdAt: IsoDateTime

  /** The ID of the document. */
  document_id: DocumentId

  /** An array of errors encountered during the operation. */
  errors: Errors

  /** Indicates whether the document is password protected. */
  password_protected: PasswordProtected

  /** SHA256 hash of the PDF file underlying the document. */
  sourcePdfSha256: SourcePdfSha256

  /** The document title. */
  title: Title
}

export interface AnnotationCreateWithAttachment {
  annotation: {
    content?: AnnotationContent
    group?: Group
    id?: AnnotationId
    user_id?: User
  }
}

export interface LayerCreateWithSourceLayerAndInstantJson {
  /**
   * Instant JSON file applied to the source layer when building the new layer.
   *
   * @format binary
   */
  'instant.json'?: File

  /**
   * The name of the new layer.
   * @example my-layer
   */
  name: string

  /**
   * The name of the layer the new one will be based on. If not provided or the layer with
   * the given name doesn't exist, the base layer is assumed instead.
   *
   * @example my-existing-layer
   */
  source_layer_name?: string
}

/**
 * Name of the annotation creator.
 */
export type AnnotationCreatorName = string

export interface FormFieldValue {
  createdBy: string | null

  /**
   * The resource group.
   *
   * Group allows to grant access to resources via Collaboration Permissions.
   */
  group?: Group
  name: string
  type: FormFieldType
  updatedBy: string | null
  value: string | null
}

export interface FormFieldValueUpdate {
  formFieldValues?: { name: string; value: string }[]
}

/**
 * A single comment in the document
 */
export interface Comment {
  content: CommentContent

  /**
   * The user identifier.
   *
   * Note that PSPDFKit Server does not provide any kind of user management and accepts
   * any string (or `null`) as a valid user ID.
   */
  createdBy: User

  /**
   * The resource group.
   *
   * Group allows to grant access to resources via Collaboration Permissions.
   */
  group: Group

  /** Comment identifier, unique in a layer */
  id: CommentId

  /**
   * The user identifier.
   *
   * Note that PSPDFKit Server does not provide any kind of user management and accepts
   * any string (or `null`) as a valid user ID.
   */
  updatedBy: User
}

export interface LayerCreateWithSourceLayer {
  /**
   * The name of the new layer.
   * @example my-layer
   */
  name: string

  /**
   * The name of the layer the new one will be based on. If not provided or the layer with
   * the given name doesn't exist, the base layer is assumed instead.
   *
   * @example my-existing-layer
   */
  source_layer_name?: string
}

/**
 * An array of errors encountered during the operation.
 */
export type Errors = Error[]

/**
 * Bounding box of the annotation within the page.
 * @example [255.10077620466092,656.7566095695641,145.91672653256705,18.390804597701162]
 */
export type AnnotationBbox = number[]

export interface CommentsCreateWithRoot {
  /** Represents an annotation to be created. */
  annotation: AnnotationCreate

  /** A list of comments to be added */
  comments: CommentCreate[]
}

export interface CommentsList {
  data: { comments: Comment[] }
}

export type FormFieldValues = FormFieldValue[]

/**
 * An array of outline elements.
 */
export type OutlineElements = OutlineElement[]

/**
 * Controls transparency of the annotation.
 * @min 0
 * @max 1
 * @example 0.9
 */
export type AnnotationOpacity = number

/**
 * Indicates whether the document is password protected.
 * @example true
 */
export type PasswordProtected = boolean

export interface BookmarkUpdate {
  content: {
    action: { pageIndex?: number; type: string; uri?: string }
    name: string
    pdfBookmarkId?: string
    sortKey?: string
    type: 'pspdfkit/bookmark'
    v: number
  }
  id: string
}

export interface DigitalSignatureCreate {
  /**
   * When `true`, it instructs PSPDFKit Server to flatten the document before signing it.
   *
   * Note that the resulting document's records will be deleted.
   * @example false
   */
  flatten?: boolean
  signerDataSource?: { estimatedSize?: number }

  /**
   * A string token that will be forwarded to the underlying signing service.
   *
   * @example user-1-with-rights
   */
  signingToken?: string
}

export interface EmbeddedFile {
  content?: {
    contentType?: string
    description?: string
    fileAttachmentId: string
    fileName?: string
    fileSize?: number
    type: 'pspdfkit/embedded-file'
    updatedAt?: IsoDateTime
    v: number
  }
  createdBy?: string | null
  id: string
  updatedBy?: string | null
}

/**
 * The string "all" to remove all annotations.
 * @example all
 */
export type AnnotationIdsAll = string

/**
 * Comment identifier, unique in a layer
 */
export type CommentId = string

/**
* The resource group.

Group allows to grant access to resources via Collaboration Permissions.
*/
export type Group = string | null

/**
* Represents a digital signature associated with a portion of the document.
A signature's status is expressed via two properties:
  - **integrity**, which guarantees that the content covered by the signature byte-range hasn't changed since the signature has been applied.
  - **validity**, which guarantees that the entity who applied the signature is who they claim to be.
*/
export interface DigitalSignature {
  certificateChainValidationStatus:
    | 'ok'
    | 'ok_but_self_signed'
    | 'untrusted'
    | 'expired'
    | 'not_yet_valid'
    | 'invalid'
    | 'revoked'
    | 'failed_to_retrieve_signature_contents'
    | 'general_validation_problem'

  /** @example 2013-12-19 14:45:26 */
  creationDate?: string
  documentIntegrityStatus:
    | 'ok'
    | 'tampered_document'
    | 'failed_to_retrieve_signature_contents'
    | 'failed_to_retrieve_byterange'
    | 'failed_to_compute_digest'
    | 'failed_to_retrieve_signing_certificate'
    | 'failed_to_retrieve_public_key'
    | 'failed_encryption_padding'
    | 'failed_unsupported_signature_type'
    | 'general_failure'
  documentModifiedSinceSignature: boolean
  isExpired: boolean
  isSelfSigned: boolean
  isTrusted: boolean

  /** @example Vienna */
  signatureLocation?: string

  /** @example accepted */
  signatureReason?: string
  signatureValidationStatus: 'valid' | 'warning' | 'error'

  /** @example John Appleseed */
  signerName?: string
}

/**
 * An array of operations which can be applied to the document.
 */
export type DocumentOperations = DocumentOperation[]

export interface LayerCreated {
  /** An array of errors encountered during the operation. */
  errors: Errors

  /**
   * The name of the newly created layer.
   * @example my-layer
   */
  name: string
}

/**
 * The document title.
 * @example PSPDFKit Server API Specification
 */
export type Title = string | null

export interface AnnotationUpdate {
  /**
   * JSON representation of the annotation as described in
   * [the guides](https://pspdfkit.com/guides/server/current/server-api/json-format/#base-annotation-type).
   *
   * Depending on the value of `type` property, the annotation might include additional properties specific
   * to particular type.
   */
  content: AnnotationContent

  /**
   * The resource group.
   *
   * Group allows to grant access to resources via Collaboration Permissions.
   */
  group?: Group

  /**
   * The user identifier.
   *
   * Note that PSPDFKit Server does not provide any kind of user management and accepts
   * any string (or `null`) as a valid user ID.
   */
  user_id?: User
}

export interface CommentCreate {
  content: {
    createdAt?: CommentCreatedAt
    creatorName?: CommentCreatorName
    customData?: CustomData
    text: CommentText
    updatedAt?: CommentUpdatedAt
  }

  /**
   * The resource group.
   *
   * Group allows to grant access to resources via Collaboration Permissions.
   */
  group?: Group

  /** Comment identifier, unique in a layer */
  id?: CommentId

  /**
   * The user identifier.
   *
   * Note that PSPDFKit Server does not provide any kind of user management and accepts
   * any string (or `null`) as a valid user ID.
   */
  user_id?: User
}

export type FormFieldType =
  | 'pspdfkit/form-field/checkbox'
  | 'pspdfkit/form-field/combobox'
  | 'pspdfkit/form-field/listbox'
  | 'pspdfkit/form-field/radio'
  | 'pspdfkit/form-field/text'
  | 'pspdfkit/form-field/signature'
  | 'pspdfkit/form-field/button'

export interface RedactionsCreateErrors {
  /**
   * An object with errors encountered when creating redaction annotations.
   *
   * @example {"strategy":["is invalid"]}
   */
  error: object
}

/**
 * A single error with a reason.
 */
export interface Error {
  reason: string
}

/**
* Array of annotation flags.

See [the guides](https://pspdfkit.com/guides/server/current/server-api/json-format/#supported-annotations)
for more information.
*/
export type AnnotationFlags = (
  | 'noPrint'
  | 'noZoom'
  | 'noRotate'
  | 'noView'
  | 'hidden'
  | 'invisible'
  | 'readOnly'
  | 'locked'
  | 'toggleNoView'
  | 'lockedContents'
)[]

export interface Prerender {
  /**
   * 0-based index of the last of the prerendered pages. If this value
   * is higher than the number of pages in the document, it will be
   * automatically adjusted.
   *
   * @min 0
   * @example 3
   */
  end_page?: number

  /**
   * Allows to prerender many versions of the pages scaled by provided factors.
   * @example [1,2,4]
   */
  scales?: (1 | 2 | 4 | 6 | 8 | 12 | 16)[]

  /**
   * 0-based index of the first of the prerendered pages.
   * @min 0
   * @example 0
   */
  start_page?: number
}

/**
 * Optional annotation name.
 */
export type AnnotationName = string

/**
* The document title.

As of version 2019.2, PSPDFKit Server supports providing an
arbitrary `title` on upload, which will override the title
included in the PDF document (if present).
*/
export type CreateDocumentTitle = string

/**
* The document ID.

As of version 2018.6, PSPDFKit Server supports providing an
arbitrary `document_id` on upload. This can be useful when
you want to use your own identifiers for documents.

This feature can also be used to migrate from an existing
document management solution on demand, as we explained in
the [document migration
guide](https://pspdfkit.com/guides/server/current/pspdfkit-server/migrate-existing-documents).
*/
export type CreateDocumentId = string

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  ResponseType,
} from 'axios'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private secure?: boolean
  private format?: ResponseType

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '',
    })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  private mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      // @ts-ignore
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`
      )
      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = (format && this.format) || void 0

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      // @ts-ignore
      requestParams.headers.common = { Accept: '*/*' }
      // @ts-ignore
      requestParams.headers.post = {}
      // @ts-ignore
      requestParams.headers.put = {}

      body = this.createFormData(body as Record<string, unknown>)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData
          ? { 'Content-Type': type }
          : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    })
  }
}

/**
 * @title PSPDFKit Server API
 * @version 2021.6.2
 * @contact PSPDFKit (https://pspdfkit.com)
 *
 * PSPDFKit Server provides an HTTP-based API for integrating with your
 * existing backend.
 *
 * It allows you to:
 *   - Add documents by either uploading them or specifying URLs where the
 *     documents can be fetched from.
 *   - Efficiently copy a previously added document, usually with the
 *     intention to share it with a different set of users.
 *   - Delete documents.
 *   - Fetch, create, update, and delete annotations in a particular document.
 *   - Add, rotate, remove pages and merge other PDF files into existing
 *     documents.
 *
 * Requests to this API are protected with a secret token configurable via the
 * `API_AUTH_TOKEN` variable. The token needs to be included in the `Authorization`
 * header of each request:
 *
 * ```
 * Authorization: Token token="<API_AUTH_TOKEN>"
 * ```
 *
 * Because this API allows full access to all data stored on the server, it is
 * only meant to be used by your backend services, which we assume are fully
 * trusted. For example, when connecting PSPDFKit for iOS to PSPDFKit Server,
 * you must create document-scoped JSON Web Tokens (JWTs) that can be handed
 * out to users.
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Highlighted text in the document refers to any text that is highlighted with any of the [markup annotations](https://pspdfkit.com/guides/server/current/server-api/json-format/#pspdfkit-markup-highlight-squiggly-strikeout-underline), like underline, strikeout, or highlight. Note that the data returned by this endpoint is just an approximation and might not always exactly reflect the text highlighted in the PDF file.
     *
     * @tags Layers
     * @name GetDocumentLayerPageHighlightedText
     * @summary Fetch highlighted text of a given page in a layer
     * @request GET:/api/documents/{documentId}/layers/{layerName}/pages/{pageIndex}/highlighted
     * @secure
     */
    getDocumentLayerPageHighlightedText: (
      documentId: string,
      layerName: string,
      pageIndex: number,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: HighlightedText[] }, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/pages/${pageIndex}/highlighted`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returned records describe files that are attached to a layer. Use attachments API to retrieve the actual file contents.
     *
     * @tags Embedded files
     * @name GetDocumentLayerEmbeddedFiles
     * @summary Gets layers's embedded files
     * @request GET:/api/documents/{documentId}/layers/{layerName}/embedded-files
     * @secure
     */
    getDocumentLayerEmbeddedFiles: (
      documentId: string,
      layerName: string,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: { embeddedFiles?: EmbeddedFile[] } }, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/embedded-files`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Layers
     * @name GetDocumentLayerInstantJson
     * @summary Export layer's annotations as an Instant JSON file
     * @request GET:/api/documents/{documentId}/layers/{layerName}/document.json
     * @secure
     */
    getDocumentLayerInstantJson: (
      documentId: string,
      layerName: string,
      params: RequestParams = {}
    ) =>
      this.request<SourcePdfSha256, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/document.json`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this endpoint to apply existing redaction annotation to the default layer, erasing any content and annotations below them. Applying redactions removes the existing redaction annotations and rewrites the underlying PDF file. Note that regardless of applied redactions, the content and annotations from the originally uploaded file are always stored at the document's immutable base layer. In some circumstances, e.g. due to legal requirements, this may be undesirable. In these cases, you can delete the document after applying redactions, which will erase all of the document's data.
     *
     * @tags Redaction
     * @name ApplyDocumentLayerRedactions
     * @summary Applies redactions to the given layer
     * @request POST:/api/documents/{documentId}/layers/{layerName}/redact
     * @secure
     */
    applyDocumentLayerRedactions: (
      documentId: string,
      layerName: string,
      params: RequestParams = {}
    ) =>
      this.request<DocumentProperties, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/redact`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this endpoint to apply existing redaction annotation to the default layer, erasing any content and annotations below them. Applying redactions removes the existing redaction annotations and rewrites the underlying PDF file. Note that regardless of applied redactions, the content and annotations from the originally uploaded file are always stored at the document's immutable base layer. In some circumstances, e.g. due to legal requirements, this may be undesirable. In these cases, you can delete the document after applying redactions, which will erase all of the document's data.
     *
     * @tags Redaction
     * @name ApplyDocumentRedactions
     * @summary Applies redactions to the document's default layer
     * @request POST:/api/documents/{documentId}/redact
     * @secure
     */
    applyDocumentRedactions: (documentId: string, params: RequestParams = {}) =>
      this.request<DocumentProperties, void>({
        path: `/api/documents/${documentId}/redact`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns a layer's digital signatures.
     *
     * @tags Digital Signatures
     * @name GetDocumentLayerDigitalSignatures
     * @summary Gets a layer's digital signatures
     * @request GET:/api/documents/{documentId}/layers/{layerName}/signatures
     * @secure
     */
    getDocumentLayerDigitalSignatures: (
      documentId: string,
      layerName: string,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: DigitalSignatures }, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/signatures`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this endpoint to digitally sign a document.
     *
     * @tags Digital Signatures
     * @name SignDocument
     * @summary Digitally sign a document
     * @request POST:/api/documents/{documentId}/sign
     * @secure
     */
    signDocument: (
      documentId: string,
      data: DigitalSignatureCreate,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: DigitalSignature }, void>({
        path: `/api/documents/${documentId}/sign`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Documents
     * @name GetDocumentPageText
     * @summary Fetch text of a given page in a document
     * @request GET:/api/documents/{documentId}/pages/{pageIndex}/text
     * @secure
     */
    getDocumentPageText: (
      documentId: string,
      pageIndex: number,
      params: RequestParams = {}
    ) =>
      this.request<{ textLines?: TextLine[] }, void | SourcePdfSha256>({
        path: `/api/documents/${documentId}/pages/${pageIndex}/text`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this endpoint to add comments and their root annotation at the same time. Note that the annotation needs to be either a markup annotation or a comment marker. The `id` and `createdAt` properties of the comment are autogenerated by the Server if they are not provided.
     *
     * @tags Comments
     * @name CreateDocumentLayerComments
     * @summary Adds comments along with their root annotation in the given layer
     * @request POST:/api/documents/{documentId}/layers/{layerName}/comments
     * @secure
     */
    createDocumentLayerComments: (
      documentId: string,
      layerName: string,
      data: CommentsCreateWithRoot,
      params: RequestParams = {}
    ) =>
      this.request<
        CommentsCreatedWithRoot,
        void | CommentsCreateErrorsWithRoot
      >({
        path: `/api/documents/${documentId}/layers/${layerName}/comments`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Documents
     * @name DocumentApplyInstantJson
     * @summary Applies an Instant JSON file to document's default layer.
     * @request POST:/api/documents/{documentId}/apply_instant_json
     * @secure
     */
    documentApplyInstantJson: (
      documentId: string,
      data: { 'instant.json'?: File },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/apply_instant_json`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description This endpoint allows you to delete an annotation in the given layer.
     *
     * @tags Annotations
     * @name DeleteDocumentLayerAnnotation
     * @summary Delete an existing annotation in the layer.
     * @request DELETE:/api/documents/{documentId}/layers/{layerName}/annotations/{annotationId}
     * @secure
     */
    deleteDocumentLayerAnnotation: (
      documentId: string,
      layerName: string,
      annotationId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/annotations/${annotationId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Annotations
     * @name GetDocumentLayerAnnotation
     * @summary Get an existing annotation from the layer
     * @request GET:/api/documents/{documentId}/layers/{layerName}/annotations/{annotationId}
     * @secure
     */
    getDocumentLayerAnnotation: (
      documentId: string,
      layerName: string,
      annotationId: string,
      params: RequestParams = {}
    ) =>
      this.request<Annotation, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/annotations/${annotationId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description This endpoint allows you to update an annotation in the given layer. The annotation's content will be completely replaced with the `content` provided in the request, and its `updatedBy` field will be set to `user_id`.
     *
     * @tags Annotations
     * @name UpdateDocumentLayerAnnotation
     * @summary Update an existing annotation in the layer
     * @request PUT:/api/documents/{documentId}/layers/{layerName}/annotations/{annotationId}
     * @secure
     */
    updateDocumentLayerAnnotation: (
      documentId: string,
      layerName: string,
      annotationId: string,
      data: AnnotationUpdate,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/annotations/${annotationId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint allows you to fetch properties of a document including its title, information about password-protection, SHA256 hash of the content, and the storage mechanism used for the underlying PDF file. All of them are set by the server when a document is uploaded.
     *
     * @tags Documents
     * @name FetchDocumentProperties
     * @summary Fetch document properties
     * @request GET:/api/documents/{documentId}/properties
     * @secure
     */
    fetchDocumentProperties: (documentId: string, params: RequestParams = {}) =>
      this.request<{ data?: DocumentProperties }, void>({
        path: `/api/documents/${documentId}/properties`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bookmarks
     * @name DeleteDocumentBookmark
     * @summary Deletes an existing bookmark in the specified document
     * @request DELETE:/api/documents/{documentId}/bookmarks/{bookmarkId}
     * @secure
     */
    deleteDocumentBookmark: (
      documentId: string,
      bookmarkId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/bookmarks/${bookmarkId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bookmarks
     * @name UpdateDocumentBookmark
     * @summary Updates an existing bookmark in the specified document
     * @request PUT:/api/documents/{documentId}/bookmarks/{bookmarkId}
     * @secure
     */
    updateDocumentBookmark: (
      documentId: string,
      bookmarkId: string,
      data: BookmarkUpdate,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/bookmarks/${bookmarkId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bookmarks
     * @name GetDocumentBookmarks
     * @summary Gets a document's bookmarks
     * @request GET:/api/documents/{documentId}/bookmarks
     * @secure
     */
    getDocumentBookmarks: (documentId: string, params: RequestParams = {}) =>
      this.request<{ data?: { bookmarks?: Bookmark[] } }, void>({
        path: `/api/documents/${documentId}/bookmarks`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bookmarks
     * @name CreateDocumentBookmark
     * @summary Creates a new bookmark in the specified document
     * @request POST:/api/documents/{documentId}/bookmarks
     * @secure
     */
    createDocumentBookmark: (
      documentId: string,
      data: BookmarkCreate,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: { id: string } }, void>({
        path: `/api/documents/${documentId}/bookmarks`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description This operation downloads the latest version of the document with annotations as a PDF file. If the query parameter `source=true` is included in the request, the originally uploaded version will be fetched instead. Additionally, you can download the flattened version of the file by providing `flatten=true` query parameter. Note, however, that `source` and `flatten` can't be used at the same time.
     *
     * @tags Documents
     * @name DownloadDocumentPdf
     * @summary Download the document as a PDF file
     * @request GET:/api/documents/{documentId}/pdf
     * @secure
     */
    downloadDocumentPdf: (
      documentId: string,
      query?: { source?: boolean; flatten?: boolean },
      params: RequestParams = {}
    ) =>
      this.request<File, void>({
        path: `/api/documents/${documentId}/pdf`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns an image with the rendered page from a document. Requires exactly one of `width` and `height` query parameters to set the required dimensions of the rendered image. Annotation AP streams are not rendered by default, use `render_ap_streams` query parameter to enable AP streams rendering. Rendered image format depends on the value of the `Accept` header. Supported content types are `image/png` (default) and `image/webp`.
     *
     * @tags Documents
     * @name RenderDocumentPage
     * @summary Renders a given page in a document
     * @request GET:/api/documents/{documentId}/pages/{pageIndex}/image
     * @secure
     */
    renderDocumentPage: (
      documentId: string,
      pageIndex: number,
      query?: { width?: number; height?: number; render_ap_streams?: boolean },
      params: RequestParams = {}
    ) =>
      this.request<File, void | SourcePdfSha256>({
        path: `/api/documents/${documentId}/pages/${pageIndex}/image`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'blob',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Layers
     * @name GetDocumentLayerPageText
     * @summary Fetch text of a given page in a layer
     * @request GET:/api/documents/{documentId}/layers/{layerName}/pages/{pageIndex}/text
     * @secure
     */
    getDocumentLayerPageText: (
      documentId: string,
      layerName: string,
      pageIndex: number,
      params: RequestParams = {}
    ) =>
      this.request<{ textLines?: TextLine[] }, void | SourcePdfSha256>({
        path: `/api/documents/${documentId}/layers/${layerName}/pages/${pageIndex}/text`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Highlighted text in the document refers to any text that is highlighted with any of the [markup annotations](https://pspdfkit.com/guides/server/current/server-api/json-format/#pspdfkit-markup-highlight-squiggly-strikeout-underline), like underline, strikeout, or highlight. Note that the data returned by this endpoint is just an approximation and might not always exactly reflect the text highlighted in the PDF file.
     *
     * @tags Documents
     * @name GetDocumentPageHighlightedText
     * @summary Fetch highlighted text of a given page in a document
     * @request GET:/api/documents/{documentId}/pages/{pageIndex}/highlighted
     * @secure
     */
    getDocumentPageHighlightedText: (
      documentId: string,
      pageIndex: number,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: HighlightedText[] }, void>({
        path: `/api/documents/${documentId}/pages/${pageIndex}/highlighted`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Documents
     * @name GetDocumentXfdf
     * @summary Export document's annotations as an XFDF file
     * @request GET:/api/documents/{documentId}/document.xfdf
     * @secure
     */
    getDocumentXfdf: (documentId: string, params: RequestParams = {}) =>
      this.request<SourcePdfSha256, void>({
        path: `/api/documents/${documentId}/document.xfdf`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Documents
     * @name GetDocumentInstantJson
     * @summary Export document's annotations as an Instant JSON file
     * @request GET:/api/documents/{documentId}/document.json
     * @secure
     */
    getDocumentInstantJson: (documentId: string, params: RequestParams = {}) =>
      this.request<SourcePdfSha256, void>({
        path: `/api/documents/${documentId}/document.json`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description To import an Instant JSON file and download the resulting PDF, you can `POST` a `multipart/form` request including an `instant.json` file. This will create a new PDF containing the latest annotations of the chosen layer, import the uploaded Instant JSON, and respond with the resulting PDF. Please note that this action will not modify the existing document, but rather only import the Instant JSON on a temporary file that will be downloaded in the process.
     *
     * @tags Documents
     * @name DownloadDocumentWithInstantJson
     * @summary Download a document with its default layer importing Instant JSON file
     * @request POST:/api/documents/{documentId}/pdf_with_instant_json
     * @secure
     */
    downloadDocumentWithInstantJson: (
      documentId: string,
      data: { 'instant.json'?: File },
      params: RequestParams = {}
    ) =>
      this.request<File, void>({
        path: `/api/documents/${documentId}/pdf_with_instant_json`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description This endpoint allows you to edit the document, performing transformations like rotating, adding or deleting pages. After these operations are applied, the server will return the result as a PDF file. You can find the list of supported operations in the [JSON format guide](https://pspdfkit.com/guides/server/current/server-api/json-format#document-operations). Note that in order to use this endpoint you need to have a document editing feature enabled in your license. ### Operations with external files In order to use `importDocument`, `applyInstantJson`, or `applyXfdf` operations, you need to use `multipart/form-data` content type.  See more detailed instructions in [the guides](https://pspdfkit.com/guides/server/current/server-api/documents/#editing-a-document-s-pdf-and-persisting-the-resulting-file).
     *
     * @tags Documents
     * @name EditAndDownloadDocumentPdf
     * @summary Edit the document's PDF and download it
     * @request POST:/api/documents/{documentId}/pdf_with_operations
     * @secure
     */
    editAndDownloadDocumentPdf: (
      documentId: string,
      data: { operations?: DocumentOperations },
      params: RequestParams = {}
    ) =>
      this.request<File, void>({
        path: `/api/documents/${documentId}/pdf_with_operations`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Attachments are files that are attached to a document. This endpoint provides a way to fetch an attachment's contents.
     *
     * @tags Attachments
     * @name GetDocumentAttachment
     * @summary Gets a document's attachment
     * @request GET:/api/documents/{documentId}/attachments/{attachmentId}
     * @secure
     */
    getDocumentAttachment: (
      documentId: string,
      attachmentId: string,
      params: RequestParams = {}
    ) =>
      this.request<File, void>({
        path: `/api/documents/${documentId}/attachments/${attachmentId}`,
        method: 'GET',
        secure: true,
        format: 'blob',
        ...params,
      }),

    /**
     * @description Use this endpoint to add multiple redaction annotations in a single request. Available strategies are: - `preset` - creates redactions on top of text and annotations matching the predefined pattern. For the full list of presets, see the request schema. - `regex` - creates redactions on top of text and annotations matching the provided regular expression. The regular expressions needs to comply with the [ICU regex standard](http://userguide.icu-project.org/strings/regexp). - `text` - creates rections on top of text and annotations matching the provided string search term. Note that the search is case-insensitive. The shape of the `strategyOptions` depends on the chosen strategy. Currently each strategy supports the `includeAnnotations` options (`true` by default), which controls whether redactions should also cover annotations whose content match the search query. The `user_id` key allows to specify the owner of the newly created annotations, and `content` allows to override their visual properties. On success, an array of created redaction annotations is returned.
     *
     * @tags Redaction
     * @name CreateDocumentRedactions
     * @summary Batch-creates redaction annotations in the default layer using provided strategy
     * @request POST:/api/documents/{documentId}/redactions
     * @secure
     */
    createDocumentRedactions: (
      documentId: string,
      data: RedactionsCreate,
      params: RequestParams = {}
    ) =>
      this.request<
        { data?: { annotations?: Annotation[] } },
        void | RedactionsCreateErrors
      >({
        path: `/api/documents/${documentId}/redactions`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this endpoint to digitally sign a document's layer.
     *
     * @tags Digital Signatures
     * @name SignDocumentLayer
     * @summary Digitally sign a document's layer
     * @request POST:/api/documents/{documentId}/layers/{layerName}/sign
     * @secure
     */
    signDocumentLayer: (
      documentId: string,
      layerName: string,
      data: DigitalSignatureCreate,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: DigitalSignature }, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/sign`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this endpoint to list all the comments attached to the given annotation in the document's layer with the specified name.
     *
     * @tags Comments
     * @name FetchDocumentLayerAnnotationComments
     * @summary Fetch comments under the annotation in the given layer
     * @request GET:/api/documents/{documentId}/layers/{layerName}/annotations/{annotationId}/comments
     * @secure
     */
    fetchDocumentLayerAnnotationComments: (
      documentId: string,
      layerName: string,
      annotationId: string,
      params: RequestParams = {}
    ) =>
      this.request<CommentsList, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/annotations/${annotationId}/comments`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this endpoint to add new comments to the existing annotation in the given layer. Note that the annotation needs to be either a markup annotation or a comment marker. The `id` and `createdAt` properties of the comment are autogenerated by the Server if they are not provided.
     *
     * @tags Comments
     * @name CreateDocumentLayerAnnotationComments
     * @summary Adds comments under the annotation in the given layer
     * @request POST:/api/documents/{documentId}/layers/{layerName}/annotations/{annotationId}/comments
     * @secure
     */
    createDocumentLayerAnnotationComments: (
      documentId: string,
      layerName: string,
      annotationId: string,
      data: CommentsCreate,
      params: RequestParams = {}
    ) =>
      this.request<CommentsCreated, void | CommentsCreateErrors>({
        path: `/api/documents/${documentId}/layers/${layerName}/annotations/${annotationId}/comments`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes a document with all of its annotation, underlying PDF file and attachments not referenced by other documents.
     *
     * @tags Documents
     * @name DeleteDocument
     * @summary Delete a document
     * @request DELETE:/api/documents/{documentId}
     * @secure
     */
    deleteDocument: (documentId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description To import an Instant JSON file and download the resulting PDF, you can `POST` a `multipart/form` request including an `instant.json` file. This will create a new PDF containing the latest annotations of the default layer, import the uploaded Instant JSON, and respond with the resulting PDF. Please note that this action will not modify the existing document, but rather only import the Instant JSON on a temporary file that will be downloaded in the process.
     *
     * @tags Layers
     * @name DownloadDocumentLayerWithInstantJson
     * @summary Download a PDF, applying the Instant JSON file to the chosen layer
     * @request POST:/api/documents/{documentId}/layers/{layerName}/pdf_with_instant_json
     * @secure
     */
    downloadDocumentLayerWithInstantJson: (
      documentId: string,
      layerName: string,
      data: { 'instant.json'?: File },
      params: RequestParams = {}
    ) =>
      this.request<File, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/pdf_with_instant_json`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description You can use this endpoint to fetch annotations on the given page from the given layer. Note that if you specify `application/json` content type in the `Accept` header, only the first 1000 annotations from the page will be returned. If the page has more than 1000 annotations, the `truncated` property in the reponse is set set to `true`. In order to consume greater number of annotations in a controlled manner, you can specify `application/x-ndjson` as accepted content type - read more about it in our [guides](https://pspdfkit.com/guides/server/current/server-api/annotations/#fetching-document-annotations).
     *
     * @tags Annotations
     * @name GetDocumentLayerPageAnnotations
     * @summary Fetch the layer's annotations for the given page
     * @request GET:/api/documents/{documentId}/layers/{layerName}/pages/{pageIndex}/annotations
     * @secure
     */
    getDocumentLayerPageAnnotations: (
      documentId: string,
      layerName: string,
      pageIndex: number,
      params: RequestParams = {}
    ) =>
      this.request<
        { data?: { annotations?: Annotation[]; truncated?: boolean } },
        void
      >({
        path: `/api/documents/${documentId}/layers/${layerName}/pages/${pageIndex}/annotations`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description If the content type of the request is `multipart/form-data`, the document with the chosen layer will be copied, and the uploaded `instant.json` file will be imported into the default layer. If the content type is `application/json`, the request body is ignored and the layer is copied as-is, without any modifications to the default layer.
     *
     * @tags Layers
     * @name CopyDocumentLayerWithInstantJson
     * @summary Copy the layer into a new document, applying the Instant JSON file
     * @request POST:/api/documents/{documentId}/layers/{layerName}/copy_with_instant_json
     * @secure
     */
    copyDocumentLayerWithInstantJson: (
      documentId: string,
      layerName: string,
      data: any,
      params: RequestParams = {}
    ) =>
      this.request<
        {
          createdAt: IsoDateTime
          documentId: DocumentId
          errors: Errors
          password_protected: PasswordProtected
          sourcePdfSha256: SourcePdfSha256
          title: Title
        },
        void
      >({
        path: `/api/documents/${documentId}/layers/${layerName}/copy_with_instant_json`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name GetDocumentLayerFormFieldValues
     * @summary Gets a layer's form field values
     * @request GET:/api/documents/{documentId}/layers/{layerName}/form-field-values
     * @secure
     */
    getDocumentLayerFormFieldValues: (
      documentId: string,
      layerName: string,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: { formFieldValues?: FormFieldValues } }, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/form-field-values`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name UpdateDocumentLayerFormFieldValues
     * @summary Update a layer's form field values
     * @request POST:/api/documents/{documentId}/layers/{layerName}/form-field-values
     * @secure
     */
    updateDocumentLayerFormFieldValues: (
      documentId: string,
      layerName: string,
      data: FormFieldValueUpdate,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/form-field-values`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bookmarks
     * @name DeleteDocumentLayerBookmark
     * @summary Deletes an existing bookmark in the specified layer
     * @request DELETE:/api/documents/{documentId}/layers/{layerName}/bookmarks/{bookmarkId}
     * @secure
     */
    deleteDocumentLayerBookmark: (
      documentId: string,
      layerName: string,
      bookmarkId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/bookmarks/${bookmarkId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bookmarks
     * @name UpdateDocumentLayerBookmark
     * @summary Updates an existing bookmark in the specified layer
     * @request PUT:/api/documents/{documentId}/layers/{layerName}/bookmarks/{bookmarkId}
     * @secure
     */
    updateDocumentLayerBookmark: (
      documentId: string,
      layerName: string,
      bookmarkId: string,
      data: BookmarkUpdate,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/bookmarks/${bookmarkId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Fetches the document's list of layers
     *
     * @tags Layers
     * @name ListLayers
     * @summary Get a document's layers
     * @request GET:/api/documents/{documentId}/layers
     * @secure
     */
    listLayers: (documentId: string, params: RequestParams = {}) =>
      this.request<{ data?: string[] }, void>({
        path: `/api/documents/${documentId}/layers`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description This endpoint allows you to create a new layer for a document. It supports three modes of operation: - *create a new layer based on a source layer*: this essentially copies a layer in a document to a new layer in the same document - *create a new layer based on an Instant JSON file*: this creates a new layer by copying document's base layer and applying the provided Instant JSON payload - *create a new layer based on a source layer and an Instant JSON file*: the same as above, but instead of copying the base layer, the source layer is used **NOTE**: When the provided source layer name doesn't exist, the base layer is used instead. In case of success, the new layer name is returned along with a list of errors from importing the Instant JSON file into the layer.
     *
     * @tags Layers
     * @name CreateNewLayer
     * @summary Create a new layer
     * @request POST:/api/documents/{documentId}/layers
     * @secure
     */
    createNewLayer: (
      documentId: string,
      data: LayerCreateWithSourceLayer,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: LayerCreated }, void>({
        path: `/api/documents/${documentId}/layers`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bookmarks
     * @name GetDocumentLayerBookmarks
     * @summary Gets a layer's bookmarks
     * @request GET:/api/documents/{documentId}/layers/{layerName}/bookmarks
     * @secure
     */
    getDocumentLayerBookmarks: (
      documentId: string,
      layerName: string,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: { bookmarks?: Bookmark[] } }, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/bookmarks`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bookmarks
     * @name CreateDocumentLayerBookmark
     * @summary Creates a new bookmark in the specified layer
     * @request POST:/api/documents/{documentId}/layers/{layerName}/bookmarks
     * @secure
     */
    createDocumentLayerBookmark: (
      documentId: string,
      layerName: string,
      data: BookmarkCreate,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: { id: string } }, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/bookmarks`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this endpoint to search in a whole document or a continuous range of pages. This API offers three different types of search, controlled via `type` query parameter: - `text` (default) - simple, text search. By default, the search query is case insensitive, but you can change this by setting `caseSensitive` to `true`. - `preset` - search using one of the predefined patterns. For the full list of presets, see the request parameters schema. - `regex` - search using a regular expression. The regular expressions needs to comply with the [ICU regex standard](http://userguide.icu-project.org/strings/regexp). By default, the regular expression is case sensitive, but you can change that by setting the `caseSensitive` parameter to `false`. When using `text` search, the search query needs to be at least three characters long. By default, search results do not include annotations. If you want to search inside annotations in the document, you can include a `include_annotations` parameter set to `true`.
     *
     * @tags Documents
     * @name SearchDocument
     * @summary Search for text inside a document
     * @request GET:/api/documents/{documentId}/search
     * @secure
     */
    searchDocument: (
      documentId: string,
      query: {
        q: string | string | SearchPreset
        type?: SearchType
        start?: number
        limit?: number
        include_annotations?: boolean
        case_sensitive?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<{ data?: SearchResults }, void>({
        path: `/api/documents/${documentId}/search`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Layers
     * @name GetDocumentLayerXfdf
     * @summary Export layer's annotations as an XFDF file
     * @request GET:/api/documents/{documentId}/layers/{layerName}/document.xfdf
     * @secure
     */
    getDocumentLayerXfdf: (
      documentId: string,
      layerName: string,
      params: RequestParams = {}
    ) =>
      this.request<SourcePdfSha256, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/document.xfdf`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description This endpoint allows you to delete an annotation in the document's default layer.
     *
     * @tags Annotations
     * @name DeleteDocumentAnnotation
     * @summary Delete an existing annotation in the document
     * @request DELETE:/api/documents/{documentId}/annotations/{annotationId}
     * @secure
     */
    deleteDocumentAnnotation: (
      documentId: string,
      annotationId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/annotations/${annotationId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Use this endpoint to get the annotation from the document's default layer.
     *
     * @tags Annotations
     * @name GetDocumentAnnotation
     * @summary Get an existing annotation from the document
     * @request GET:/api/documents/{documentId}/annotations/{annotationId}
     * @secure
     */
    getDocumentAnnotation: (
      documentId: string,
      annotationId: string,
      params: RequestParams = {}
    ) =>
      this.request<Annotation, void>({
        path: `/api/documents/${documentId}/annotations/${annotationId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description This endpoint allows you to update an annotation in the document's default layer. The annotation's content will be completely replaced with the `content` provided in the request, and its `updatedBy` field will be set to `user_id`.
     *
     * @tags Annotations
     * @name UpdateDocumentAnnotation
     * @summary Update an existing annotation in the document
     * @request PUT:/api/documents/{documentId}/annotations/{annotationId}
     * @secure
     */
    updateDocumentAnnotation: (
      documentId: string,
      annotationId: string,
      data: AnnotationUpdate,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/annotations/${annotationId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Returns an image with the rendered page from a document. Requires exactly one of `width` and `height` query parameters to set the required dimensions of the rendered image. Annotation AP streams are not rendered by default, use `render_ap_streams` query parameter to enable AP streams rendering. Rendered image format depends on the value of the `Accept` header. Supported content types are `image/png` (default) and `image/webp`.
     *
     * @tags Layers
     * @name RenderDocumentLayerPage
     * @summary Renders a given page in a layer
     * @request GET:/api/documents/{documentId}/layers/{layerName}/pages/{pageIndex}/image
     * @secure
     */
    renderDocumentLayerPage: (
      documentId: string,
      layerName: string,
      pageIndex: number,
      query?: { width?: number; height?: number; render_ap_streams?: boolean },
      params: RequestParams = {}
    ) =>
      this.request<File, void | SourcePdfSha256>({
        path: `/api/documents/${documentId}/layers/${layerName}/pages/${pageIndex}/image`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'blob',
        ...params,
      }),

    /**
     * @description This operation downloads the latest version of the document with annotations for the specified layer as a PDF file. For example, you can use this endpoint to download the PDF file generated after applying a series of document operations on a given layer. If the query parameter `source=true` is included in the request, the originally uploaded version will be fetched instead. Additionally, you can download the flattened version of the file by providing `flatten=true` query parameter. Note, however, that `source` and `flatten` can't be used at the same time.
     *
     * @tags Layers
     * @name DownloadDocumentLayerPdf
     * @summary Download the document layer as a PDF file
     * @request GET:/api/documents/{documentId}/layers/{layerName}/pdf
     * @secure
     */
    downloadDocumentLayerPdf: (
      documentId: string,
      layerName: string,
      query?: { source?: boolean; flatten?: boolean },
      params: RequestParams = {}
    ) =>
      this.request<File, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/pdf`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description You can use this endpoint to copy the document, without having to reupload it to the server. The copy includes the latest version of all layers and their annotations from the original document. A common use case for copying a document is allowing different users work on the same file without seeing each other's annotations. However, we recommend leveraging named [Instant Layers](https://pspdfkit.com/guides/server/current/server-api/instant-layers) for such scenarios.
     *
     * @tags Documents
     * @name CopyDocument
     * @summary Copy a document
     * @request POST:/api/copy_document
     * @secure
     */
    copyDocument: (
      data: { document_id?: string; new_document_id?: string },
      params: RequestParams = {}
    ) =>
      this.request<{ data: { document_id: string } }, void>({
        path: `/api/copy_document`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description This endpoint allows you to fetch the document's page count, the dimensions of each page, and the document's permissions.
     *
     * @tags Documents
     * @name FetchDocumentInfo
     * @summary Fetch a top-level information about the document
     * @request GET:/api/documents/{documentId}/document_info
     * @secure
     */
    fetchDocumentInfo: (documentId: string, params: RequestParams = {}) =>
      this.request<{ data?: DocumentInfo }, void>({
        path: `/api/documents/${documentId}/document_info`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this endpoint to list all the annotation attached to the given annotation in the document's default layer.
     *
     * @tags Comments
     * @name FetchDocumentAnnotationComments
     * @summary Fetch comments under the annotation in the default layer
     * @request GET:/api/documents/{documentId}/annotations/{annotationId}/comments
     * @secure
     */
    fetchDocumentAnnotationComments: (
      documentId: string,
      annotationId: string,
      params: RequestParams = {}
    ) =>
      this.request<CommentsList, void>({
        path: `/api/documents/${documentId}/annotations/${annotationId}/comments`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this endpoint to add new comments to the existing annotation in the document's default layer. Note that the annotation needs to be either a markup annotation or a comment marker. The `id` and `createdAt` properties of the comment are autogenerated by the Server if they are not provided.
     *
     * @tags Comments
     * @name CreateDocumentAnnotationComments
     * @summary Adds comments under the annotation in the default layer
     * @request POST:/api/documents/{documentId}/annotations/{annotationId}/comments
     * @secure
     */
    createDocumentAnnotationComments: (
      documentId: string,
      annotationId: string,
      data: CommentsCreate,
      params: RequestParams = {}
    ) =>
      this.request<CommentsCreated, void | CommentsCreateErrors>({
        path: `/api/documents/${documentId}/annotations/${annotationId}/comments`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description You can use this endpoint to fetch annotations on the given page from the document's default layer. Note that if you specify `application/json` content type in the `Accept` header, only the first 1000 annotations from the page will be returned. If the page has more than 1000 annotations, the `truncated` property in the reponse is set set to `true`. In order to consume greater number of annotations in a controlled manner, you can specify `application/x-ndjson` as accepted content type - read more about it in our [guides](https://pspdfkit.com/guides/server/current/server-api/annotations/#fetching-document-annotations).
     *
     * @tags Annotations
     * @name GetDocumentPageAnnotations
     * @summary Fetch the document's annotations for the given page
     * @request GET:/api/documents/{documentId}/pages/{pageIndex}/annotations
     * @secure
     */
    getDocumentPageAnnotations: (
      documentId: string,
      pageIndex: number,
      params: RequestParams = {}
    ) =>
      this.request<
        { data?: { annotations?: Annotation[]; truncated?: boolean } },
        void
      >({
        path: `/api/documents/${documentId}/pages/${pageIndex}/annotations`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this endpoint to add multiple redaction annotations in a single request. Available strategies are: - `preset` - creates redactions on top of text and annotations matching the predefined pattern. For the full list of presets, see the request schema. - `regex` - creates redactions on top of text and annotations matching the provided regular expression. The regular expressions needs to comply with the [ICU regex standard](http://userguide.icu-project.org/strings/regexp). - `text` - creates rections on top of text and annotations matching the provided string search term. Note that the search is case-insensitive. The shape of the `strategyOptions` depends on the chosen strategy. Currently each strategy supports the `includeAnnotations` options (`true` by default), which controls whether redactions should also cover annotations whose content match the search query. The `user_id` key allows to specify the owner of the newly created annotations, and `content` allows to override their visual properties. On success, an array of created redaction annotations is returned.
     *
     * @tags Redaction
     * @name CreateDocumentLayerRedactions
     * @summary Batch-creates redaction annotations in the layer using provided strategy
     * @request POST:/api/documents/{documentId}/layers/{layerName}/redactions
     * @secure
     */
    createDocumentLayerRedactions: (
      documentId: string,
      layerName: string,
      data: RedactionsCreate,
      params: RequestParams = {}
    ) =>
      this.request<
        { data?: { annotations?: Annotation[] } },
        void | RedactionsCreateErrors
      >({
        path: `/api/documents/${documentId}/layers/${layerName}/redactions`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description If the content type of the request is `multipart/form-data`, the document with its default layer will be copied, and uploaded `instant.json` file will be imported into the default layer. If the content type is `application/json`, the request body is ignored and the document is copied as-is, without any modifications to the default layer.
     *
     * @tags Documents
     * @name CopyDocumentWithInstantJson
     * @summary Copy document with its default layer importing Instant JSON file
     * @request POST:/api/documents/{documentId}/copy_with_instant_json
     * @secure
     */
    copyDocumentWithInstantJson: (
      documentId: string,
      data: any,
      params: RequestParams = {}
    ) =>
      this.request<
        {
          createdAt: IsoDateTime
          documentId: DocumentId
          errors: Errors
          password_protected: PasswordProtected
          sourcePdfSha256: SourcePdfSha256
          title: Title
        },
        void
      >({
        path: `/api/documents/${documentId}/copy_with_instant_json`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returned records describe files that are attached to a document. Use attachments API to retrieve the actual file contents.
     *
     * @tags Embedded files
     * @name GetDocumentEmbeddedFiles
     * @summary Gets document's embedded files
     * @request GET:/api/documents/{documentId}/embedded-files
     * @secure
     */
    getDocumentEmbeddedFiles: (
      documentId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: { embeddedFiles?: EmbeddedFile[] } }, void>({
        path: `/api/documents/${documentId}/embedded-files`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description # Basic usage To create a new document from a file, `POST` its contents to `/api/document`, specifying the correct content type. PSPDFKit supports: - PDF documents, using the content type `application/pdf`. - For licenses that include support for Microsoft Word documents, you can use the `application/msword` content type for `.doc` files and the `application/vnd.openxmlformats-officedocument.wordprocessingml.document` content type for `.docx` files. - For licenses that include support for Image Documents, you can use the `image/jpeg` content type for `.jpg` and `.jpeg` files and the `image/png` content type for `.png` files. PSPDFKit Server will extract the title of the document from the file metadata if it is present. The `errors` array will be non-empty if errors were encountered when importing annotations from the document. PSPDFKit Server also supports uploading files as `multipart/form-data`. When using this method, the server will try reading the title from the file metadata and fall back to the filename if the metadata is not available. # Adding a document from a URL You can also add a document to PSPDFKit Server by specifying the URL the document can be fetched from. By default, a document added by a URL is not persistently stored in PSPDFKit Server and will be fetched from the URL when necessary. This is useful when you already have a document storage solution and you want PSPDFKit Server to fetch the documents from your document storage. You can override this default storage behavior to store the document persistently by setting a `copy_asset_to_storage_backend` option to `true`. To add a document from a URL, `POST` its URL — and optionally, its SHA256 hash, your `document_id`, and your `title` — using the `application/json` content type. # Creating a document from scratch Instead of uploading existing PDF documents, PSPDFKit Server allows you to generate documents from scratch based on HTML files, stylesheets, and other assets. Head over to the [PDF Generation](https://pspdfkit.com/guides/server/current/pdf-generation/) guide for a detailed walkthrough, usage examples, and things to watch out for. To generate a document, you need to supply a [PDF generation schema](https://pspdfkit.com/guides/server/current/pdf-generation/pdf-generation-schema) under a `generation` key in the multipart request and attach any files referenced in the schema as multipart attachments. You can pass any options allowed by the other document creation methods - `document_id`, `title`, etc. - as parts in the multipart request. # Advanced usage When using `multipart/form-data` you can also attach an XFDF or Instant JSON file to be applied to the imported document. This feature is available both for direct file upload and importing from remote URL, however, note that you should specify either `url` (and optionally `sha256`) or `file`, not both at the same time. While using this request format you can also specify a custom `title` or `document_id`.
     *
     * @tags Documents
     * @name UploadDocument
     * @summary Upload a document
     * @request POST:/api/documents
     * @secure
     */
    uploadDocument: (
      data: {
        copy_asset_to_storage_backend?: CreateDocumentCopyAssetToStorageBackend
        document_id?: CreateDocumentId
        sha256?: CreateDocumentSha256
        title?: CreateDocumentTitle
        url: CreateDocumentUrl
      },
      params: RequestParams = {}
    ) =>
      this.request<{ data?: DocumentCreated }, void>({
        path: `/api/documents`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name GetDocumentFormFieldValues
     * @summary Gets a document's form field values
     * @request GET:/api/documents/{documentId}/form-field-values
     * @secure
     */
    getDocumentFormFieldValues: (
      documentId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: { formFieldValues?: FormFieldValues } }, void>({
        path: `/api/documents/${documentId}/form-field-values`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name UpdateDocumentFormFieldValues
     * @summary Update a document's form field values
     * @request POST:/api/documents/{documentId}/form-field-values
     * @secure
     */
    updateDocumentFormFieldValues: (
      documentId: string,
      data: FormFieldValueUpdate,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/form-field-values`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Layers
     * @name LayerApplyInstantJson
     * @summary Applies an Instant JSON file to the layer.
     * @request POST:/api/documents/{documentId}/layers/{layerName}/apply_instant_json
     * @secure
     */
    layerApplyInstantJson: (
      documentId: string,
      layerName: string,
      data: { 'instant.json'?: File },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/apply_instant_json`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Use this endpoint to add comments and their root annotation at the same time. Note that the annotation needs to be either a markup annotation or a comment marker. The `id` and `createdAt` properties of the comment are autogenerated by the Server if they are not provided.
     *
     * @tags Comments
     * @name CreateDocumentComments
     * @summary Adds comments along with their root annotation in the default layer
     * @request POST:/api/documents/{documentId}/comments
     * @secure
     */
    createDocumentComments: (
      documentId: string,
      data: CommentsCreateWithRoot,
      params: RequestParams = {}
    ) =>
      this.request<
        CommentsCreatedWithRoot,
        void | CommentsCreateErrorsWithRoot
      >({
        path: `/api/documents/${documentId}/comments`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description This endpoint allows you to remove multiple annoations from the document's default layer. The endpoint accepts one content type: - `application/json` - in this case, the request body is either a JSON array of annotations ids, or "all" in order to remove all annotations in one go.
     *
     * @tags Annotations
     * @name RemoveDocumentAnnotations
     * @summary Deletes annotations in the document.
     * @request DELETE:/api/documents/{documentId}/annotations
     * @secure
     */
    removeDocumentAnnotations: (
      documentId: string,
      data: DeleteAnnotations,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/annotations`,
        method: 'DELETE',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description You can use this endpoint to fetch all annotations from the document's default layer. Note that if you specify `application/json` content type in the `Accept` header, only the first 1000 annotations will be returned. If the document has more than 1000 annotations, the `truncated` property in the reponse is set set to `true`. In order to consume greater number of annotations in a controlled manner, you can specify `application/x-ndjson` as accepted content type - read more about it in our [guides](https://pspdfkit.com/guides/server/current/server-api/annotations/#fetching-document-annotations).
     *
     * @tags Annotations
     * @name GetDocumentAnnotations
     * @summary Fetch the document's annotations
     * @request GET:/api/documents/{documentId}/annotations
     * @secure
     */
    getDocumentAnnotations: (documentId: string, params: RequestParams = {}) =>
      this.request<
        { data?: { annotations?: Annotation[]; truncated?: boolean } },
        void
      >({
        path: `/api/documents/${documentId}/annotations`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description This endpoint allows you to add a new annotation to document's default layer. The endpoint accepts two content types: - `application/json` - in this case, the request body is a JSON representation of the annotation; - `multipart/form-data` - with multipart request, annotation can be uploaded along with a new attachment. Annotation is one part of the request, followed by attachments. You can read more about this scenario in our [guides](https://pspdfkit.com/guides/server/current/server-api/annotations/#creating-an-annotation-with-an-attachment). The annotation `id` is optional, and will be generated by the server if not provided. The `user_id` is set as the creator of the annotation.
     *
     * @tags Annotations
     * @name CreateDocumentAnnotation
     * @summary Create a new annotation in the document
     * @request POST:/api/documents/{documentId}/annotations
     * @secure
     */
    createDocumentAnnotation: (
      documentId: string,
      data: AnnotationCreate,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: { annotation_id?: AnnotationId } }, void>({
        path: `/api/documents/${documentId}/annotations`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description This endpoint allows you to prerender documents so that they are cached ahead of time by PSPDFKit server. This speeds up loading times when opening documents via PSPDFKit for Web. The rendering is done asynchronously, and future clients asking for the document will receive the already cached, rendered pages. You can customize prerendering by providing a range of pages to prerender and an array of scale factors for prerendered images.
     *
     * @tags Documents
     * @name PrerenderDocument
     * @summary Prerender a document in the background
     * @request POST:/api/documents/{documentId}/prerender
     * @secure
     */
    prerenderDocument: (
      documentId: string,
      data: Prerender,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/prerender`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint allows you to delete a layer along with all of its contents.
     *
     * @tags Layers
     * @name DeleteLayer
     * @summary Delete a layer
     * @request DELETE:/api/documents/{documentId}/layers/{layerName}
     * @secure
     */
    deleteLayer: (
      documentId: string,
      layerName: string,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/layers/${layerName}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a document's digital signatures.
     *
     * @tags Digital Signatures
     * @name GetDocumentDigitalSignatures
     * @summary Gets a document's digital signatures
     * @request GET:/api/documents/{documentId}/signatures
     * @secure
     */
    getDocumentDigitalSignatures: (
      documentId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: DigitalSignatures }, void>({
        path: `/api/documents/${documentId}/signatures`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description This endpoint allows you to remove multiple annoations from the given layer. The endpoint accepts one content type: - `application/json` - in this case, the request body is either a JSON array of annotations ids, or "all" in order to remove all annotations in one go.
     *
     * @tags Annotations
     * @name RemoveDocumentLayerAnnotations
     * @summary Deletes annotations in the layer.
     * @request DELETE:/api/documents/{documentId}/layers/{layerName}/annotations
     * @secure
     */
    removeDocumentLayerAnnotations: (
      documentId: string,
      layerName: string,
      data: DeleteAnnotations,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/annotations`,
        method: 'DELETE',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description You can use this endpoint to fetch all annotations from the given layer. Note that if you specify `application/json` content type in the `Accept` header, only the first 1000 annotations will be returned. If the layer has more than 1000 annotations, the `truncated` property in the reponse is set set to `true`. In order to consume greater number of annotations in a controlled manner, you can specify `application/x-ndjson` as accepted content type - read more about it in our [guides](https://pspdfkit.com/guides/server/current/server-api/annotations/#fetching-document-annotations).
     *
     * @tags Annotations
     * @name GetDocumentLayerAnnotations
     * @summary Fetch the layer's annotations
     * @request GET:/api/documents/{documentId}/layers/{layerName}/annotations
     * @secure
     */
    getDocumentLayerAnnotations: (
      documentId: string,
      layerName: string,
      params: RequestParams = {}
    ) =>
      this.request<
        { data?: { annotations?: Annotation[]; truncated?: boolean } },
        void
      >({
        path: `/api/documents/${documentId}/layers/${layerName}/annotations`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Annotations
     * @name CreateDocumentLayerAnnotation
     * @summary Creates a new annotation for a given layer
     * @request POST:/api/documents/{documentId}/layers/{layerName}/annotations
     * @secure
     */
    createDocumentLayerAnnotation: (
      documentId: string,
      layerName: string,
      data: AnnotationCreate,
      params: RequestParams = {}
    ) =>
      this.request<{ data?: { annotation_id?: string } }, void>({
        path: `/api/documents/${documentId}/layers/${layerName}/annotations`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description This endpoint allows you to fetch the outline of a document.
     *
     * @tags Documents
     * @name GetDocumentOutline
     * @summary Get a document outline
     * @request GET:/api/documents/{documentId}/outline.json
     * @secure
     */
    getDocumentOutline: (documentId: string, params: RequestParams = {}) =>
      this.request<{ data?: OutlineElements }, void>({
        path: `/api/documents/${documentId}/outline.json`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description This endpoint allows you to edit the document, performing transformations like rotating, adding or deleting pages, and store the resulting PDF file at the document's base layer. Editing the document affects the responses returned by other endpoints. For example, removing a page also deletes all the annotations on that page. Similarly, other functionality, like searching in a document will return different results. If you need to preserve the original document, PDF file, and related data, we recommend leveraging [Instant Layers](https://pspdfkit.com/guides/server/current/server-api/instant-layers) and always using named layers. You can find the list of supported operations in the [JSON format guide](https://pspdfkit.com/guides/server/current/server-api/json-format#document-operations). Note that in order to use this endpoint you need to have a document editing feature enabled in your license. ### Operations with external files In order to use `importDocument`, `applyInstantJson`, or `applyXfdf` operations, you need to use `multipart/form-data` content type.  See more detailed instructions in [the guides](https://pspdfkit.com/guides/server/current/server-api/documents/#editing-a-document-s-pdf-and-persisting-the-resulting-file).
     *
     * @tags Documents
     * @name EditAndPersistDocumentPdf
     * @summary Edit the document's PDF and persist the result
     * @request POST:/api/documents/{documentId}/apply_operations
     * @secure
     */
    editAndPersistDocumentPdf: (
      documentId: string,
      data: { operations?: DocumentOperations },
      params: RequestParams = {}
    ) =>
      this.request<DocumentProperties, void>({
        path: `/api/documents/${documentId}/apply_operations`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
}
