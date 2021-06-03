export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type CloudinaryAsset */
  childrenCloudinaryAsset?: Maybe<Array<Maybe<CloudinaryAsset>>>;
  /** Returns the first child node of type CloudinaryAsset or null if there are no children of given type on this node */
  childCloudinaryAsset?: Maybe<CloudinaryAsset>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  flags?: Maybe<SiteFlags>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteFlags = {
  PRESERVE_WEBPACK_CACHE?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};


export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type WpNode = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

export type WpContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post->guid and the guid column in the "post_objects" database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The uri slug for the post. This is equivalent to the WP_Post->post_name field and the post_name column in the database for the "post_objects" table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type WpContentNodeDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the ContentType type */
export type WpContentNodeToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentType>;
};

/** An Post Type object */
export type WpContentType = Node & WpNode & WpUniformResourceIdentifiable & {
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']>;
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']>;
  /** Connection between the ContentType type and the Taxonomy type */
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  contentNodes?: Maybe<WpContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  labels?: Maybe<WpPostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  public?: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  showUi?: Maybe<Scalars['Boolean']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpUniformResourceIdentifiable = {
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type WpContentTypeToTaxonomyConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTaxonomy>>>;
};

/** A taxonomy object */
export type WpTaxonomy = Node & WpNode & {
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']>;
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Connection between the Taxonomy type and the ContentType type */
export type WpTaxonomyToContentTypeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentType>>>;
};

/** The Schema for post type */
export type WpSeoPageInfoSchema = {
  raw?: Maybe<Scalars['String']>;
};

/** Connection between the ContentType type and the ContentNode type */
export type WpContentTypeToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Details for labels of the PostType */
export type WpPostTypeLabelDetails = {
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLockConnectionEdge = {
  /** The timestamp for when the node was last edited */
  lockTimestamp?: Maybe<Scalars['String']>;
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpUser>;
};

/** A User object */
export type WpUser = Node & WpNode & WpUniformResourceIdentifiable & WpCommenter & WpDatabaseIdentifier & {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpAvatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the User type and the Comment type */
  comments?: Maybe<WpUserToCommentConnection>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<Scalars['String']>;
  /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  pages?: Maybe<WpUserToPageConnection>;
  /** Connection between the User type and the post type */
  posts?: Maybe<WpUserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']>;
  /** Connection between the User type and the UserRole type */
  roles?: Maybe<WpUserToUserRoleConnection>;
  /** The Yoast SEO data of a user */
  seo?: Maybe<WpSeoUser>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpCommenter = {
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
};

export type WpDatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type WpAvatar = {
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
};

/** Connection between the User type and the Comment type */
export type WpUserToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

/** A Comment object */
export type WpComment = Node & WpNode & WpDatabaseIdentifier & {
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  agent?: Maybe<Scalars['String']>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  approved?: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  author?: Maybe<WpCommentToCommenterConnectionEdge>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  authorIp?: Maybe<Scalars['String']>;
  /** Connection between the Comment type and the ContentNode type */
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdge>;
  /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
  content?: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
  date?: Maybe<Scalars['Date']>;
  /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
  dateGmt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
  karma?: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the Comment type */
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  replies?: Maybe<WpCommentToCommentConnection>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  type?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** A Comment object */
export type WpCommentDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A Comment object */
export type WpCommentDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Connection between the Comment type and the Commenter type */
export type WpCommentToCommenterConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpCommenter>;
};

/** Connection between the Comment type and the ContentNode type */
export type WpCommentToContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToParentCommentConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpComment>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

/** The mediaItem type */
export type WpMediaItem = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithAuthor & WpNodeWithComments & WpHierarchicalContentNode & {
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the mediaItem type and the Comment type */
  comments?: Maybe<WpMediaItemToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The filesize in bytes of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<WpMediaDetails>;
  /** Url of the mediaItem */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']>;
  /** The mime type of the mediaItem */
  mimeType?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The Yoast SEO data of the mediaItem */
  seo?: Maybe<WpPostTypeSeo>;
  /** The sizes attribute value for an image. */
  sizes?: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  srcSet?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  /** @deprecated MediaItem.remoteFile was renamed to localFile */
  remoteFile?: Maybe<File>;
  localFile?: Maybe<File>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The mediaItem type */
export type WpMediaItemDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpNodeWithTemplate = {
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
};

export type WpNodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};

export type WpNodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
};

export type WpNodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
};

export type WpHierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

export type WpContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type WpNodeWithAuthorToUserConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpUser>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeAncestorsConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeChildrenConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToParentContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

/** Connection between the mediaItem type and the Comment type */
export type WpMediaItemToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLastConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpUser>;
};

/** File details for a Media Item */
export type WpMediaDetails = {
  /** The filename of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  /** Meta information associated with the mediaItem */
  meta?: Maybe<WpMediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<WpMediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
};

/** Meta connected to a MediaItem */
export type WpMediaItemMeta = {
  /** Aperture measurement of the media item. */
  aperture?: Maybe<Scalars['Float']>;
  /** Information about the camera used to create the media item. */
  camera?: Maybe<Scalars['String']>;
  /** The text string description associated with the media item. */
  caption?: Maybe<Scalars['String']>;
  /** Copyright information associated with the media item. */
  copyright?: Maybe<Scalars['String']>;
  /** The date/time when the media was created. */
  createdTimestamp?: Maybe<Scalars['Int']>;
  /** The original creator of the media item. */
  credit?: Maybe<Scalars['String']>;
  /** The focal length value of the media item. */
  focalLength?: Maybe<Scalars['Float']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso?: Maybe<Scalars['Int']>;
  /** List of keywords used to describe or identfy the media item. */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The vertical or horizontal aspect of the media item. */
  orientation?: Maybe<Scalars['String']>;
  /** The shutter speed information of the media item. */
  shutterSpeed?: Maybe<Scalars['Float']>;
  /** A useful title for the media item. */
  title?: Maybe<Scalars['String']>;
};

/** Details of an available size for a media item */
export type WpMediaSize = {
  /** The filename of the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The height of the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the referenced size */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the referenced size */
  width?: Maybe<Scalars['String']>;
};

export type WpPostTypeSeo = {
  breadcrumbs?: Maybe<Array<Maybe<WpSeoPostTypeBreadcrumbs>>>;
  canonical?: Maybe<Scalars['String']>;
  cornerstone?: Maybe<Scalars['Boolean']>;
  focuskw?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  opengraphAuthor?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphImage?: Maybe<WpMediaItem>;
  opengraphModifiedTime?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Float']>;
  schema?: Maybe<WpSeoPostTypeSchema>;
  title?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<WpMediaItem>;
  twitterTitle?: Maybe<Scalars['String']>;
};

export type WpSeoPostTypeBreadcrumbs = {
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** The Schema types */
export type WpSeoPostTypeSchema = {
  articleType?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageType?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type WpUserToPageConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPage>>>;
};

/** The page type */
export type WpPage = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithComments & WpNodeWithRevisions & WpNodeWithPageAttributes & WpHierarchicalContentNode & WpMenuItemLinkable & {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the page type and the Comment type */
  comments?: Maybe<WpPageToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether this page is set to the privacy page. */
  isPrivacyPage: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The Yoast SEO data of the page */
  seo?: Maybe<WpPostTypeSeo>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The page type */
export type WpPageDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The page type */
export type WpPageDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The page type */
export type WpPageModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The page type */
export type WpPageModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpNodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
};

export type WpNodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
};

export type WpNodeWithRevisions = {
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
};

export type WpNodeWithPageAttributes = {
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
};

export type WpMenuItemLinkable = {
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri: Scalars['String'];
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type WpNodeWithFeaturedImageToMediaItemConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpMediaItem>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type WpNodeWithRevisionsToContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

/** Connection between the page type and the Comment type */
export type WpPageToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

/** Connection between the User type and the post type */
export type WpUserToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

/** The post type */
export type WpPost = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithExcerpt & WpNodeWithComments & WpNodeWithTrackbacks & WpNodeWithRevisions & WpMenuItemLinkable & {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the post type and the category type */
  categories?: Maybe<WpPostToCategoryConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the post type and the Comment type */
  comments?: Maybe<WpPostToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  isSticky: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the post type and the postFormat type */
  postFormats?: Maybe<WpPostToPostFormatConnection>;
  /** The Yoast SEO data of the post */
  seo?: Maybe<WpPostTypeSeo>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the post type and the tag type */
  tags?: Maybe<WpPostToTagConnection>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** Connection between the post type and the TermNode type */
  terms?: Maybe<WpPostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The post type */
export type WpPostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The post type */
export type WpPostDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The post type */
export type WpPostModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The post type */
export type WpPostModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpNodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
};

export type WpNodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Connection between the post type and the category type */
export type WpPostToCategoryConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

/** The category type */
export type WpCategory = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & WpHierarchicalTermNode & WpMenuItemLinkable & {
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnection>;
  /** Connection between the category type and the category type */
  wpChildren?: Maybe<WpCategoryToCategoryConnection>;
  /** Connection between the category type and the ContentNode type */
  contentNodes?: Maybe<WpCategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the category type and the category type */
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the category type and the post type */
  posts?: Maybe<WpCategoryToPostConnection>;
  /** The Yoast SEO data of the Categories taxonomy. */
  seo?: Maybe<WpTaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the category type and the Taxonomy type */
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpHierarchicalTermNode = {
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the category type and the category type */
export type WpCategoryToAncestorsCategoryConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

/** Connection between the category type and the category type */
export type WpCategoryToCategoryConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

/** Connection between the category type and the ContentNode type */
export type WpCategoryToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Connection between the category type and the category type */
export type WpCategoryToParentCategoryConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpCategory>;
};

/** Connection between the category type and the post type */
export type WpCategoryToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpTaxonomySeo = {
  breadcrumbs?: Maybe<Array<Maybe<WpSeoPostTypeBreadcrumbs>>>;
  canonical?: Maybe<Scalars['String']>;
  cornerstone?: Maybe<Scalars['Boolean']>;
  focuskw?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  opengraphAuthor?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphImage?: Maybe<WpMediaItem>;
  opengraphModifiedTime?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  schema?: Maybe<WpSeoTaxonomySchema>;
  title?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<WpMediaItem>;
  twitterTitle?: Maybe<Scalars['String']>;
};

/** The Schema types for Taxonomy */
export type WpSeoTaxonomySchema = {
  raw?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the Taxonomy type */
export type WpCategoryToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

/** Connection between the post type and the Comment type */
export type WpPostToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

/** Connection between the post type and the postFormat type */
export type WpPostToPostFormatConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPostFormat>>>;
};

/** The postFormat type */
export type WpPostFormat = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & {
  /** Connection between the postFormat type and the ContentNode type */
  contentNodes?: Maybe<WpPostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the post type */
  posts?: Maybe<WpPostFormatToPostConnection>;
  /** The Yoast SEO data of the Formats taxonomy. */
  seo?: Maybe<WpTaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the Taxonomy type */
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Connection between the postFormat type and the ContentNode type */
export type WpPostFormatToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Connection between the postFormat type and the post type */
export type WpPostFormatToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type WpPostFormatToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

/** Connection between the post type and the tag type */
export type WpPostToTagConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTag>>>;
};

/** The tag type */
export type WpTag = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & WpMenuItemLinkable & {
  /** Connection between the tag type and the ContentNode type */
  contentNodes?: Maybe<WpTagToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the post type */
  posts?: Maybe<WpTagToPostConnection>;
  /** The Yoast SEO data of the Tags taxonomy. */
  seo?: Maybe<WpTaxonomySeo>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the Taxonomy type */
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Connection between the tag type and the ContentNode type */
export type WpTagToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Connection between the tag type and the post type */
export type WpTagToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

/** Connection between the tag type and the Taxonomy type */
export type WpTagToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

/** Connection between the post type and the TermNode type */
export type WpPostToTermNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTermNode>>>;
};

/** Connection between the User type and the UserRole type */
export type WpUserToUserRoleConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpUserRole>>>;
};

/** A user role object */
export type WpUserRole = Node & WpNode & {
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The registered name of the role */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpSeoUser = {
  fullHead?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  schema?: Maybe<WpSeoUserSchema>;
  social?: Maybe<WpSeoUserSocial>;
  title?: Maybe<Scalars['String']>;
};

/** The Schema types for User */
export type WpSeoUserSchema = {
  raw?: Maybe<Scalars['String']>;
};

export type WpSeoUserSocial = {
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  mySpace?: Maybe<Scalars['String']>;
  pinterest?: Maybe<Scalars['String']>;
  soundCloud?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  youTube?: Maybe<Scalars['String']>;
};

/** All of the registered settings */
export type WpSettings = {
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The discussion setting type */
export type WpDiscussionSettings = {
  /** Allow people to submit comments on new posts. */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

/** The general setting type */
export type WpGeneralSettings = {
  /** A date format for all date strings. */
  dateFormat?: Maybe<Scalars['String']>;
  /** Site tagline. */
  description?: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  email?: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  language?: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  timeFormat?: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  timezone?: Maybe<Scalars['String']>;
  /** Site title. */
  title?: Maybe<Scalars['String']>;
  /** Site URL. */
  url?: Maybe<Scalars['String']>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type WpMenu = Node & WpNode & WpDatabaseIdentifier & {
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  /** The locations a menu is assigned to */
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems?: Maybe<WpMenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Registered menu locations */
export type WpMenuLocationEnum =
  | 'EXPANDED'
  | 'FOOTER'
  | 'MOBILE'
  | 'PRIMARY'
  | 'SOCIAL';

/** Connection between the Menu type and the MenuItem type */
export type WpMenuToMenuItemConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type WpMenuItem = Node & WpNode & WpDatabaseIdentifier & {
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<WpMenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdge>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  menu?: Maybe<WpMenuItemToMenuConnectionEdge>;
  /** Menu item order */
  order?: Maybe<Scalars['Int']>;
  /** The database id of the parent menu item or null if it is the root */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  parentId?: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  path: Scalars['String'];
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Connection between the MenuItem type and the MenuItem type */
export type WpMenuItemToMenuItemConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type WpMenuItemToMenuItemLinkableConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpMenuItemLinkable>;
};

/** Connection between the MenuItem type and the Menu type */
export type WpMenuItemToMenuConnectionEdge = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpMenu>;
};

/** The reading setting type */
export type WpReadingSettings = {
  /** Blog pages show at most. */
  postsPerPage?: Maybe<Scalars['Int']>;
};

/** The Yoast SEO site level configuration data */
export type WpSeoConfig = {
  breadcrumbs?: Maybe<WpSeoBreadcrumbs>;
  contentTypes?: Maybe<WpSeoContentTypes>;
  openGraph?: Maybe<WpSeoOpenGraph>;
  redirects?: Maybe<Array<Maybe<WpSeoRedirect>>>;
  schema?: Maybe<WpSeoSchema>;
  social?: Maybe<WpSeoSocial>;
  webmaster?: Maybe<WpSeoWebmaster>;
};

/** The Yoast SEO breadcrumb config */
export type WpSeoBreadcrumbs = {
  archivePrefix?: Maybe<Scalars['String']>;
  boldLast?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  homeText?: Maybe<Scalars['String']>;
  notFoundText?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  searchPrefix?: Maybe<Scalars['String']>;
  separator?: Maybe<Scalars['String']>;
  showBlogPage?: Maybe<Scalars['Boolean']>;
};

/** The Yoast SEO search appearance content types */
export type WpSeoContentTypes = {
  actionMonitorAction?: Maybe<WpSeoContentType>;
  mediaItem?: Maybe<WpSeoContentType>;
  page?: Maybe<WpSeoContentType>;
  post?: Maybe<WpSeoContentType>;
};

/** he Yoast SEO search appearance content types fields */
export type WpSeoContentType = {
  archive?: Maybe<WpSeoContentTypeArchive>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['Boolean']>;
  schema?: Maybe<WpSeoPageInfoSchema>;
  schemaType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** he Yoast SEO search appearance content types fields */
export type WpSeoContentTypeArchive = {
  archiveLink?: Maybe<Scalars['String']>;
  breadcrumbTitle?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  hasArchive?: Maybe<Scalars['Boolean']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** The Open Graph data */
export type WpSeoOpenGraph = {
  defaultImage?: Maybe<WpMediaItem>;
  frontPage?: Maybe<WpSeoOpenGraphFrontPage>;
};

/** The Open Graph Front page data */
export type WpSeoOpenGraphFrontPage = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<WpMediaItem>;
  title?: Maybe<Scalars['String']>;
};

/** The Yoast redirect data  (Yoast Premium only) */
export type WpSeoRedirect = {
  format?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

/** The Yoast SEO schema data */
export type WpSeoSchema = {
  companyLogo?: Maybe<WpMediaItem>;
  companyName?: Maybe<Scalars['String']>;
  companyOrPerson?: Maybe<Scalars['String']>;
  inLanguage?: Maybe<Scalars['String']>;
  logo?: Maybe<WpMediaItem>;
  personLogo?: Maybe<WpMediaItem>;
  personName?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  wordpressSiteName?: Maybe<Scalars['String']>;
};

/** The Yoast SEO Social media links */
export type WpSeoSocial = {
  facebook?: Maybe<WpSeoSocialFacebook>;
  instagram?: Maybe<WpSeoSocialInstagram>;
  linkedIn?: Maybe<WpSeoSocialLinkedIn>;
  mySpace?: Maybe<WpSeoSocialMySpace>;
  pinterest?: Maybe<WpSeoSocialPinterest>;
  twitter?: Maybe<WpSeoSocialTwitter>;
  wikipedia?: Maybe<WpSeoSocialWikipedia>;
  youTube?: Maybe<WpSeoSocialYoutube>;
};

export type WpSeoSocialFacebook = {
  defaultImage?: Maybe<WpMediaItem>;
  url?: Maybe<Scalars['String']>;
};

export type WpSeoSocialInstagram = {
  url?: Maybe<Scalars['String']>;
};

export type WpSeoSocialLinkedIn = {
  url?: Maybe<Scalars['String']>;
};

export type WpSeoSocialMySpace = {
  url?: Maybe<Scalars['String']>;
};

export type WpSeoSocialPinterest = {
  metaTag?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpSeoSocialTwitter = {
  cardType?: Maybe<WpSeoCardType>;
  username?: Maybe<Scalars['String']>;
};

/** Types of cards */
export type WpSeoCardType =
  | 'summary'
  | 'summary_large_image';

export type WpSeoSocialWikipedia = {
  url?: Maybe<Scalars['String']>;
};

export type WpSeoSocialYoutube = {
  url?: Maybe<Scalars['String']>;
};

/** The Yoast SEO  webmaster fields */
export type WpSeoWebmaster = {
  baiduVerify?: Maybe<Scalars['String']>;
  googleVerify?: Maybe<Scalars['String']>;
  msVerify?: Maybe<Scalars['String']>;
  yandexVerify?: Maybe<Scalars['String']>;
};

/** Information needed by gatsby-source-wordpress. */
export type WpWpGatsby = {
  /** Returns wether or not pretty permalinks are enabled. */
  arePrettyPermalinksEnabled?: Maybe<Scalars['Boolean']>;
};

/** The writing setting type */
export type WpWritingSettings = {
  /** Default post category. */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** Default post format. */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

export type WpAcfFieldGroup = {
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type WpDefaultTemplate = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type WpCoverTemplate = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type WpFullWidthTemplate = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** Non-node WPGraphQL root fields. */
export type Wp = Node & {
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<WpSettings>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings?: Maybe<WpDiscussionSettings>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings?: Maybe<WpGeneralSettings>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings?: Maybe<WpReadingSettings>;
  /** Returns seo site data */
  seo?: Maybe<WpSeoConfig>;
  /** Information needed by gatsby-source-wordpress. */
  wpGatsby?: Maybe<WpWpGatsby>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings?: Maybe<WpWritingSettings>;
  nodeType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type CloudinaryAsset = Node & {
  fixed: CloudinaryAssetFixed;
  fluid: CloudinaryAssetFluid;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type CloudinaryAssetFixedArgs = {
  base64Width?: Maybe<Scalars['Int']>;
  base64Transformations?: Maybe<Array<Scalars['String']>>;
  chained?: Maybe<Array<Scalars['String']>>;
  height?: Maybe<Scalars['Int']>;
  transformations?: Maybe<Array<Scalars['String']>>;
  width?: Maybe<Scalars['Int']>;
  ignoreDefaultBase64?: Maybe<Scalars['Boolean']>;
};


export type CloudinaryAssetFluidArgs = {
  base64Width?: Maybe<Scalars['Int']>;
  base64Transformations?: Maybe<Array<Scalars['String']>>;
  chained?: Maybe<Array<Scalars['String']>>;
  maxWidth?: Maybe<Scalars['Int']>;
  transformations?: Maybe<Array<Scalars['String']>>;
  ignoreDefaultBase64?: Maybe<Scalars['Boolean']>;
};

export type CloudinaryAssetFixed = {
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type CloudinaryAssetFluid = {
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  presentationHeight?: Maybe<Scalars['Float']>;
  presentationWidth?: Maybe<Scalars['Float']>;
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  tracedSVG?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  entryLimit?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  ssr?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  tsLoader?: Maybe<SitePluginPluginOptionsTsLoader>;
  codegen?: Maybe<Scalars['Boolean']>;
  codegenDelay?: Maybe<Scalars['Int']>;
  alwaysCheck?: Maybe<Scalars['Boolean']>;
  typeCheck?: Maybe<Scalars['Boolean']>;
  fonts?: Maybe<Array<Maybe<Scalars['String']>>>;
  display?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  develop?: Maybe<SitePluginPluginOptionsDevelop>;
  production?: Maybe<SitePluginPluginOptionsProduction>;
  schema?: Maybe<SitePluginPluginOptionsSchema>;
  excludeFieldNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  verbose?: Maybe<Scalars['Boolean']>;
  cloudName?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  apiSecret?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsTsLoader = {
  logLevel?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDevelop = {
  nodeUpdateInterval?: Maybe<Scalars['Int']>;
  hardCacheData?: Maybe<Scalars['Boolean']>;
  hardCacheMediaFiles?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsProduction = {
  allow404Images?: Maybe<Scalars['Boolean']>;
  hardCacheMediaFiles?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsSchema = {
  typePrefix?: Maybe<Scalars['String']>;
  requestConcurrency?: Maybe<Scalars['Int']>;
  timeout?: Maybe<Scalars['Int']>;
  queryDepth?: Maybe<Scalars['Int']>;
  circularQueryLimit?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  previewRequestConcurrency?: Maybe<Scalars['Int']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type WpTermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  wpContentNode?: Maybe<WpContentNode>;
  allWpContentNode: WpContentNodeConnection;
  wpContentType?: Maybe<WpContentType>;
  allWpContentType: WpContentTypeConnection;
  wpTaxonomy?: Maybe<WpTaxonomy>;
  allWpTaxonomy: WpTaxonomyConnection;
  wpUser?: Maybe<WpUser>;
  allWpUser: WpUserConnection;
  wpComment?: Maybe<WpComment>;
  allWpComment: WpCommentConnection;
  wpMediaItem?: Maybe<WpMediaItem>;
  allWpMediaItem: WpMediaItemConnection;
  wpPage?: Maybe<WpPage>;
  allWpPage: WpPageConnection;
  wpPost?: Maybe<WpPost>;
  allWpPost: WpPostConnection;
  wpTermNode?: Maybe<WpTermNode>;
  allWpTermNode: WpTermNodeConnection;
  wpCategory?: Maybe<WpCategory>;
  allWpCategory: WpCategoryConnection;
  wpPostFormat?: Maybe<WpPostFormat>;
  allWpPostFormat: WpPostFormatConnection;
  wpTag?: Maybe<WpTag>;
  allWpTag: WpTagConnection;
  wpUserRole?: Maybe<WpUserRole>;
  allWpUserRole: WpUserRoleConnection;
  wpMenu?: Maybe<WpMenu>;
  allWpMenu: WpMenuConnection;
  wpMenuItem?: Maybe<WpMenuItem>;
  allWpMenuItem: WpMenuItemConnection;
  wp?: Maybe<Wp>;
  allWp: WpConnection;
  cloudinaryAsset?: Maybe<CloudinaryAsset>;
  allCloudinaryAsset: CloudinaryAssetConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenCloudinaryAsset?: Maybe<CloudinaryAssetFilterListInput>;
  childCloudinaryAsset?: Maybe<CloudinaryAssetFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpContentNodeArgs = {
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpContentNodeArgs = {
  filter?: Maybe<WpContentNodeFilterInput>;
  sort?: Maybe<WpContentNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpContentTypeArgs = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  canExport?: Maybe<BooleanQueryOperatorInput>;
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: Maybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: Maybe<BooleanQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  excludeFromSearch?: Maybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hasArchive?: Maybe<BooleanQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  labels?: Maybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: Maybe<StringQueryOperatorInput>;
  menuPosition?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showInAdminBar?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpContentTypeArgs = {
  filter?: Maybe<WpContentTypeFilterInput>;
  sort?: Maybe<WpContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTaxonomyArgs = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showCloud?: Maybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpTaxonomyArgs = {
  filter?: Maybe<WpTaxonomyFilterInput>;
  sort?: Maybe<WpTaxonomySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpUserArgs = {
  avatar?: Maybe<WpAvatarFilterInput>;
  capKey?: Maybe<StringQueryOperatorInput>;
  capabilities?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  extraCapabilities?: Maybe<StringQueryOperatorInput>;
  firstName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastName?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nicename?: Maybe<StringQueryOperatorInput>;
  nickname?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<WpUserToPageConnectionFilterInput>;
  posts?: Maybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<WpUserToUserRoleConnectionFilterInput>;
  seo?: Maybe<WpSeoUserFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpUserArgs = {
  filter?: Maybe<WpUserFilterInput>;
  sort?: Maybe<WpUserSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpCommentArgs = {
  agent?: Maybe<StringQueryOperatorInput>;
  approved?: Maybe<BooleanQueryOperatorInput>;
  author?: Maybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: Maybe<StringQueryOperatorInput>;
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  karma?: Maybe<IntQueryOperatorInput>;
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  replies?: Maybe<WpCommentToCommentConnectionFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpCommentArgs = {
  filter?: Maybe<WpCommentFilterInput>;
  sort?: Maybe<WpCommentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMediaItemArgs = {
  altText?: Maybe<StringQueryOperatorInput>;
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  mediaDetails?: Maybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: Maybe<StringQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  seo?: Maybe<WpPostTypeSeoFilterInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  remoteFile?: Maybe<FileFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMediaItemArgs = {
  filter?: Maybe<WpMediaItemFilterInput>;
  sort?: Maybe<WpMediaItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPageArgs = {
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPageToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  isPrivacyPage?: Maybe<BooleanQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  menuOrder?: Maybe<IntQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  seo?: Maybe<WpPostTypeSeoFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPageArgs = {
  filter?: Maybe<WpPageFilterInput>;
  sort?: Maybe<WpPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPostArgs = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  categories?: Maybe<WpPostToCategoryConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPostToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  isSticky?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  pingStatus?: Maybe<StringQueryOperatorInput>;
  pinged?: Maybe<StringQueryOperatorInput>;
  postFormats?: Maybe<WpPostToPostFormatConnectionFilterInput>;
  seo?: Maybe<WpPostTypeSeoFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<WpPostToTagConnectionFilterInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpPostToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  toPing?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPostArgs = {
  filter?: Maybe<WpPostFilterInput>;
  sort?: Maybe<WpPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTermNodeArgs = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpTermNodeArgs = {
  filter?: Maybe<WpTermNodeFilterInput>;
  sort?: Maybe<WpTermNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpCategoryArgs = {
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  wpChildren?: Maybe<WpCategoryToCategoryConnectionFilterInput>;
  contentNodes?: Maybe<WpCategoryToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  posts?: Maybe<WpCategoryToPostConnectionFilterInput>;
  seo?: Maybe<WpTaxonomySeoFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpCategoryArgs = {
  filter?: Maybe<WpCategoryFilterInput>;
  sort?: Maybe<WpCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPostFormatArgs = {
  contentNodes?: Maybe<WpPostFormatToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpPostFormatToPostConnectionFilterInput>;
  seo?: Maybe<WpTaxonomySeoFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPostFormatArgs = {
  filter?: Maybe<WpPostFormatFilterInput>;
  sort?: Maybe<WpPostFormatSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTagArgs = {
  contentNodes?: Maybe<WpTagToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpTagToPostConnectionFilterInput>;
  seo?: Maybe<WpTaxonomySeoFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpTagArgs = {
  filter?: Maybe<WpTagFilterInput>;
  sort?: Maybe<WpTagSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpUserRoleArgs = {
  capabilities?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpUserRoleArgs = {
  filter?: Maybe<WpUserRoleFilterInput>;
  sort?: Maybe<WpUserRoleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMenuArgs = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: Maybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMenuArgs = {
  filter?: Maybe<WpMenuFilterInput>;
  sort?: Maybe<WpMenuSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMenuItemArgs = {
  childItems?: Maybe<WpMenuItemToMenuItemConnectionFilterInput>;
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  linkRelationship?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: Maybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMenuItemArgs = {
  filter?: Maybe<WpMenuItemFilterInput>;
  sort?: Maybe<WpMenuItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpArgs = {
  allSettings?: Maybe<WpSettingsFilterInput>;
  discussionSettings?: Maybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: Maybe<WpGeneralSettingsFilterInput>;
  readingSettings?: Maybe<WpReadingSettingsFilterInput>;
  seo?: Maybe<WpSeoConfigFilterInput>;
  wpGatsby?: Maybe<WpWpGatsbyFilterInput>;
  writingSettings?: Maybe<WpWritingSettingsFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpArgs = {
  filter?: Maybe<WpFilterInput>;
  sort?: Maybe<WpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryCloudinaryAssetArgs = {
  fixed?: Maybe<CloudinaryAssetFixedFilterInput>;
  fluid?: Maybe<CloudinaryAssetFluidFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllCloudinaryAssetArgs = {
  filter?: Maybe<CloudinaryAssetFilterInput>;
  sort?: Maybe<CloudinaryAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type CloudinaryAssetFilterListInput = {
  elemMatch?: Maybe<CloudinaryAssetFilterInput>;
};

export type CloudinaryAssetFilterInput = {
  fixed?: Maybe<CloudinaryAssetFixedFilterInput>;
  fluid?: Maybe<CloudinaryAssetFluidFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type CloudinaryAssetFixedFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type CloudinaryAssetFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  presentationHeight?: Maybe<FloatQueryOperatorInput>;
  presentationWidth?: Maybe<FloatQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenCloudinaryAsset'
  | 'childrenCloudinaryAsset___fixed___aspectRatio'
  | 'childrenCloudinaryAsset___fixed___base64'
  | 'childrenCloudinaryAsset___fixed___height'
  | 'childrenCloudinaryAsset___fixed___src'
  | 'childrenCloudinaryAsset___fixed___srcSet'
  | 'childrenCloudinaryAsset___fixed___tracedSVG'
  | 'childrenCloudinaryAsset___fixed___width'
  | 'childrenCloudinaryAsset___fluid___aspectRatio'
  | 'childrenCloudinaryAsset___fluid___base64'
  | 'childrenCloudinaryAsset___fluid___presentationHeight'
  | 'childrenCloudinaryAsset___fluid___presentationWidth'
  | 'childrenCloudinaryAsset___fluid___sizes'
  | 'childrenCloudinaryAsset___fluid___src'
  | 'childrenCloudinaryAsset___fluid___srcSet'
  | 'childrenCloudinaryAsset___fluid___tracedSVG'
  | 'childrenCloudinaryAsset___id'
  | 'childrenCloudinaryAsset___parent___id'
  | 'childrenCloudinaryAsset___parent___parent___id'
  | 'childrenCloudinaryAsset___parent___parent___children'
  | 'childrenCloudinaryAsset___parent___children'
  | 'childrenCloudinaryAsset___parent___children___id'
  | 'childrenCloudinaryAsset___parent___children___children'
  | 'childrenCloudinaryAsset___parent___internal___content'
  | 'childrenCloudinaryAsset___parent___internal___contentDigest'
  | 'childrenCloudinaryAsset___parent___internal___description'
  | 'childrenCloudinaryAsset___parent___internal___fieldOwners'
  | 'childrenCloudinaryAsset___parent___internal___ignoreType'
  | 'childrenCloudinaryAsset___parent___internal___mediaType'
  | 'childrenCloudinaryAsset___parent___internal___owner'
  | 'childrenCloudinaryAsset___parent___internal___type'
  | 'childrenCloudinaryAsset___children'
  | 'childrenCloudinaryAsset___children___id'
  | 'childrenCloudinaryAsset___children___parent___id'
  | 'childrenCloudinaryAsset___children___parent___children'
  | 'childrenCloudinaryAsset___children___children'
  | 'childrenCloudinaryAsset___children___children___id'
  | 'childrenCloudinaryAsset___children___children___children'
  | 'childrenCloudinaryAsset___children___internal___content'
  | 'childrenCloudinaryAsset___children___internal___contentDigest'
  | 'childrenCloudinaryAsset___children___internal___description'
  | 'childrenCloudinaryAsset___children___internal___fieldOwners'
  | 'childrenCloudinaryAsset___children___internal___ignoreType'
  | 'childrenCloudinaryAsset___children___internal___mediaType'
  | 'childrenCloudinaryAsset___children___internal___owner'
  | 'childrenCloudinaryAsset___children___internal___type'
  | 'childrenCloudinaryAsset___internal___content'
  | 'childrenCloudinaryAsset___internal___contentDigest'
  | 'childrenCloudinaryAsset___internal___description'
  | 'childrenCloudinaryAsset___internal___fieldOwners'
  | 'childrenCloudinaryAsset___internal___ignoreType'
  | 'childrenCloudinaryAsset___internal___mediaType'
  | 'childrenCloudinaryAsset___internal___owner'
  | 'childrenCloudinaryAsset___internal___type'
  | 'childCloudinaryAsset___fixed___aspectRatio'
  | 'childCloudinaryAsset___fixed___base64'
  | 'childCloudinaryAsset___fixed___height'
  | 'childCloudinaryAsset___fixed___src'
  | 'childCloudinaryAsset___fixed___srcSet'
  | 'childCloudinaryAsset___fixed___tracedSVG'
  | 'childCloudinaryAsset___fixed___width'
  | 'childCloudinaryAsset___fluid___aspectRatio'
  | 'childCloudinaryAsset___fluid___base64'
  | 'childCloudinaryAsset___fluid___presentationHeight'
  | 'childCloudinaryAsset___fluid___presentationWidth'
  | 'childCloudinaryAsset___fluid___sizes'
  | 'childCloudinaryAsset___fluid___src'
  | 'childCloudinaryAsset___fluid___srcSet'
  | 'childCloudinaryAsset___fluid___tracedSVG'
  | 'childCloudinaryAsset___id'
  | 'childCloudinaryAsset___parent___id'
  | 'childCloudinaryAsset___parent___parent___id'
  | 'childCloudinaryAsset___parent___parent___children'
  | 'childCloudinaryAsset___parent___children'
  | 'childCloudinaryAsset___parent___children___id'
  | 'childCloudinaryAsset___parent___children___children'
  | 'childCloudinaryAsset___parent___internal___content'
  | 'childCloudinaryAsset___parent___internal___contentDigest'
  | 'childCloudinaryAsset___parent___internal___description'
  | 'childCloudinaryAsset___parent___internal___fieldOwners'
  | 'childCloudinaryAsset___parent___internal___ignoreType'
  | 'childCloudinaryAsset___parent___internal___mediaType'
  | 'childCloudinaryAsset___parent___internal___owner'
  | 'childCloudinaryAsset___parent___internal___type'
  | 'childCloudinaryAsset___children'
  | 'childCloudinaryAsset___children___id'
  | 'childCloudinaryAsset___children___parent___id'
  | 'childCloudinaryAsset___children___parent___children'
  | 'childCloudinaryAsset___children___children'
  | 'childCloudinaryAsset___children___children___id'
  | 'childCloudinaryAsset___children___children___children'
  | 'childCloudinaryAsset___children___internal___content'
  | 'childCloudinaryAsset___children___internal___contentDigest'
  | 'childCloudinaryAsset___children___internal___description'
  | 'childCloudinaryAsset___children___internal___fieldOwners'
  | 'childCloudinaryAsset___children___internal___ignoreType'
  | 'childCloudinaryAsset___children___internal___mediaType'
  | 'childCloudinaryAsset___children___internal___owner'
  | 'childCloudinaryAsset___children___internal___type'
  | 'childCloudinaryAsset___internal___content'
  | 'childCloudinaryAsset___internal___contentDigest'
  | 'childCloudinaryAsset___internal___description'
  | 'childCloudinaryAsset___internal___fieldOwners'
  | 'childCloudinaryAsset___internal___ignoreType'
  | 'childCloudinaryAsset___internal___mediaType'
  | 'childCloudinaryAsset___internal___owner'
  | 'childCloudinaryAsset___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenCloudinaryAsset?: Maybe<CloudinaryAssetFilterListInput>;
  childCloudinaryAsset?: Maybe<CloudinaryAssetFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteFlagsFilterInput = {
  PRESERVE_WEBPACK_CACHE?: Maybe<BooleanQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'flags___PRESERVE_WEBPACK_CACHE'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  entryLimit?: Maybe<IntQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  ssr?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  tsLoader?: Maybe<SitePluginPluginOptionsTsLoaderFilterInput>;
  codegen?: Maybe<BooleanQueryOperatorInput>;
  codegenDelay?: Maybe<IntQueryOperatorInput>;
  alwaysCheck?: Maybe<BooleanQueryOperatorInput>;
  typeCheck?: Maybe<BooleanQueryOperatorInput>;
  fonts?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  develop?: Maybe<SitePluginPluginOptionsDevelopFilterInput>;
  production?: Maybe<SitePluginPluginOptionsProductionFilterInput>;
  schema?: Maybe<SitePluginPluginOptionsSchemaFilterInput>;
  excludeFieldNames?: Maybe<StringQueryOperatorInput>;
  verbose?: Maybe<BooleanQueryOperatorInput>;
  cloudName?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  apiSecret?: Maybe<StringQueryOperatorInput>;
  resourceType?: Maybe<StringQueryOperatorInput>;
  prefix?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsTsLoaderFilterInput = {
  logLevel?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsDevelopFilterInput = {
  nodeUpdateInterval?: Maybe<IntQueryOperatorInput>;
  hardCacheData?: Maybe<BooleanQueryOperatorInput>;
  hardCacheMediaFiles?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsProductionFilterInput = {
  allow404Images?: Maybe<BooleanQueryOperatorInput>;
  hardCacheMediaFiles?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemaFilterInput = {
  typePrefix?: Maybe<StringQueryOperatorInput>;
  requestConcurrency?: Maybe<IntQueryOperatorInput>;
  timeout?: Maybe<IntQueryOperatorInput>;
  queryDepth?: Maybe<IntQueryOperatorInput>;
  circularQueryLimit?: Maybe<IntQueryOperatorInput>;
  perPage?: Maybe<IntQueryOperatorInput>;
  previewRequestConcurrency?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___entryLimit'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___namespace'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___ssr'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___tsLoader___logLevel'
  | 'pluginCreator___pluginOptions___codegen'
  | 'pluginCreator___pluginOptions___codegenDelay'
  | 'pluginCreator___pluginOptions___alwaysCheck'
  | 'pluginCreator___pluginOptions___typeCheck'
  | 'pluginCreator___pluginOptions___fonts'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___url'
  | 'pluginCreator___pluginOptions___develop___nodeUpdateInterval'
  | 'pluginCreator___pluginOptions___develop___hardCacheData'
  | 'pluginCreator___pluginOptions___develop___hardCacheMediaFiles'
  | 'pluginCreator___pluginOptions___production___allow404Images'
  | 'pluginCreator___pluginOptions___production___hardCacheMediaFiles'
  | 'pluginCreator___pluginOptions___schema___typePrefix'
  | 'pluginCreator___pluginOptions___schema___requestConcurrency'
  | 'pluginCreator___pluginOptions___schema___timeout'
  | 'pluginCreator___pluginOptions___schema___queryDepth'
  | 'pluginCreator___pluginOptions___schema___circularQueryLimit'
  | 'pluginCreator___pluginOptions___schema___perPage'
  | 'pluginCreator___pluginOptions___schema___previewRequestConcurrency'
  | 'pluginCreator___pluginOptions___excludeFieldNames'
  | 'pluginCreator___pluginOptions___verbose'
  | 'pluginCreator___pluginOptions___cloudName'
  | 'pluginCreator___pluginOptions___apiKey'
  | 'pluginCreator___pluginOptions___apiSecret'
  | 'pluginCreator___pluginOptions___resourceType'
  | 'pluginCreator___pluginOptions___prefix'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpContentNodeToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

export type WpContentTypeFilterInput = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  canExport?: Maybe<BooleanQueryOperatorInput>;
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: Maybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: Maybe<BooleanQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  excludeFromSearch?: Maybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hasArchive?: Maybe<BooleanQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  labels?: Maybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: Maybe<StringQueryOperatorInput>;
  menuPosition?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showInAdminBar?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpContentTypeToTaxonomyConnectionFilterInput = {
  nodes?: Maybe<WpTaxonomyFilterListInput>;
};

export type WpTaxonomyFilterListInput = {
  elemMatch?: Maybe<WpTaxonomyFilterInput>;
};

export type WpTaxonomyFilterInput = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showCloud?: Maybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpTaxonomyToContentTypeConnectionFilterInput = {
  nodes?: Maybe<WpContentTypeFilterListInput>;
};

export type WpContentTypeFilterListInput = {
  elemMatch?: Maybe<WpContentTypeFilterInput>;
};

export type WpContentTypeToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

export type WpContentNodeFilterListInput = {
  elemMatch?: Maybe<WpContentNodeFilterInput>;
};

export type WpContentNodeFilterInput = {
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpContentNodeToEditLastConnectionEdgeFilterInput = {
  node?: Maybe<WpUserFilterInput>;
};

export type WpUserFilterInput = {
  avatar?: Maybe<WpAvatarFilterInput>;
  capKey?: Maybe<StringQueryOperatorInput>;
  capabilities?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  extraCapabilities?: Maybe<StringQueryOperatorInput>;
  firstName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastName?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nicename?: Maybe<StringQueryOperatorInput>;
  nickname?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<WpUserToPageConnectionFilterInput>;
  posts?: Maybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<WpUserToUserRoleConnectionFilterInput>;
  seo?: Maybe<WpSeoUserFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpAvatarFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
  extraAttr?: Maybe<StringQueryOperatorInput>;
  forceDefault?: Maybe<BooleanQueryOperatorInput>;
  foundAvatar?: Maybe<BooleanQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  rating?: Maybe<StringQueryOperatorInput>;
  scheme?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type WpUserToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

export type WpCommentFilterListInput = {
  elemMatch?: Maybe<WpCommentFilterInput>;
};

export type WpCommentFilterInput = {
  agent?: Maybe<StringQueryOperatorInput>;
  approved?: Maybe<BooleanQueryOperatorInput>;
  author?: Maybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: Maybe<StringQueryOperatorInput>;
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  karma?: Maybe<IntQueryOperatorInput>;
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  replies?: Maybe<WpCommentToCommentConnectionFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpCommentToCommenterConnectionEdgeFilterInput = {
  node?: Maybe<WpCommenterFilterInput>;
};

export type WpCommenterFilterInput = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type WpCommentToContentNodeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentNodeFilterInput>;
};

export type WpCommentToParentCommentConnectionEdgeFilterInput = {
  node?: Maybe<WpCommentFilterInput>;
};

export type WpCommentToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

export type WpUserToPageConnectionFilterInput = {
  nodes?: Maybe<WpPageFilterListInput>;
};

export type WpPageFilterListInput = {
  elemMatch?: Maybe<WpPageFilterInput>;
};

export type WpPageFilterInput = {
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPageToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  isPrivacyPage?: Maybe<BooleanQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  menuOrder?: Maybe<IntQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  seo?: Maybe<WpPostTypeSeoFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

export type WpNodeWithAuthorToUserConnectionEdgeFilterInput = {
  node?: Maybe<WpUserFilterInput>;
};

export type WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

export type WpPageToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

export type WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput = {
  node?: Maybe<WpMediaItemFilterInput>;
};

export type WpMediaItemFilterInput = {
  altText?: Maybe<StringQueryOperatorInput>;
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  mediaDetails?: Maybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: Maybe<StringQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  seo?: Maybe<WpPostTypeSeoFilterInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  remoteFile?: Maybe<FileFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMediaItemToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

export type WpMediaDetailsFilterInput = {
  file?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  meta?: Maybe<WpMediaItemMetaFilterInput>;
  sizes?: Maybe<WpMediaSizeFilterListInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type WpMediaItemMetaFilterInput = {
  aperture?: Maybe<FloatQueryOperatorInput>;
  camera?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  createdTimestamp?: Maybe<IntQueryOperatorInput>;
  credit?: Maybe<StringQueryOperatorInput>;
  focalLength?: Maybe<FloatQueryOperatorInput>;
  iso?: Maybe<IntQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  orientation?: Maybe<StringQueryOperatorInput>;
  shutterSpeed?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type WpMediaSizeFilterListInput = {
  elemMatch?: Maybe<WpMediaSizeFilterInput>;
};

export type WpMediaSizeFilterInput = {
  file?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<StringQueryOperatorInput>;
};

export type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentNodeFilterInput>;
};

export type WpPostTypeSeoFilterInput = {
  breadcrumbs?: Maybe<WpSeoPostTypeBreadcrumbsFilterListInput>;
  canonical?: Maybe<StringQueryOperatorInput>;
  cornerstone?: Maybe<BooleanQueryOperatorInput>;
  focuskw?: Maybe<StringQueryOperatorInput>;
  fullHead?: Maybe<StringQueryOperatorInput>;
  metaDesc?: Maybe<StringQueryOperatorInput>;
  metaKeywords?: Maybe<StringQueryOperatorInput>;
  metaRobotsNofollow?: Maybe<StringQueryOperatorInput>;
  metaRobotsNoindex?: Maybe<StringQueryOperatorInput>;
  opengraphAuthor?: Maybe<StringQueryOperatorInput>;
  opengraphDescription?: Maybe<StringQueryOperatorInput>;
  opengraphImage?: Maybe<WpMediaItemFilterInput>;
  opengraphModifiedTime?: Maybe<StringQueryOperatorInput>;
  opengraphPublishedTime?: Maybe<StringQueryOperatorInput>;
  opengraphPublisher?: Maybe<StringQueryOperatorInput>;
  opengraphSiteName?: Maybe<StringQueryOperatorInput>;
  opengraphTitle?: Maybe<StringQueryOperatorInput>;
  opengraphType?: Maybe<StringQueryOperatorInput>;
  opengraphUrl?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<FloatQueryOperatorInput>;
  schema?: Maybe<WpSeoPostTypeSchemaFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  twitterDescription?: Maybe<StringQueryOperatorInput>;
  twitterImage?: Maybe<WpMediaItemFilterInput>;
  twitterTitle?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoPostTypeBreadcrumbsFilterListInput = {
  elemMatch?: Maybe<WpSeoPostTypeBreadcrumbsFilterInput>;
};

export type WpSeoPostTypeBreadcrumbsFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoPostTypeSchemaFilterInput = {
  articleType?: Maybe<StringQueryOperatorInput>;
  pageType?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<StringQueryOperatorInput>;
};

export type WpContentTemplateFilterInput = {
  templateName?: Maybe<StringQueryOperatorInput>;
};

export type WpUserToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

export type WpPostFilterListInput = {
  elemMatch?: Maybe<WpPostFilterInput>;
};

export type WpPostFilterInput = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  categories?: Maybe<WpPostToCategoryConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPostToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  isSticky?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  pingStatus?: Maybe<StringQueryOperatorInput>;
  pinged?: Maybe<StringQueryOperatorInput>;
  postFormats?: Maybe<WpPostToPostFormatConnectionFilterInput>;
  seo?: Maybe<WpPostTypeSeoFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<WpPostToTagConnectionFilterInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpPostToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  toPing?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpPostToCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

export type WpCategoryFilterListInput = {
  elemMatch?: Maybe<WpCategoryFilterInput>;
};

export type WpCategoryFilterInput = {
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  wpChildren?: Maybe<WpCategoryToCategoryConnectionFilterInput>;
  contentNodes?: Maybe<WpCategoryToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  posts?: Maybe<WpCategoryToPostConnectionFilterInput>;
  seo?: Maybe<WpTaxonomySeoFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpCategoryToAncestorsCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

export type WpCategoryToCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

export type WpCategoryToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

export type WpCategoryToParentCategoryConnectionEdgeFilterInput = {
  node?: Maybe<WpCategoryFilterInput>;
};

export type WpCategoryToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

export type WpTaxonomySeoFilterInput = {
  breadcrumbs?: Maybe<WpSeoPostTypeBreadcrumbsFilterListInput>;
  canonical?: Maybe<StringQueryOperatorInput>;
  cornerstone?: Maybe<BooleanQueryOperatorInput>;
  focuskw?: Maybe<StringQueryOperatorInput>;
  fullHead?: Maybe<StringQueryOperatorInput>;
  metaDesc?: Maybe<StringQueryOperatorInput>;
  metaKeywords?: Maybe<StringQueryOperatorInput>;
  metaRobotsNofollow?: Maybe<StringQueryOperatorInput>;
  metaRobotsNoindex?: Maybe<StringQueryOperatorInput>;
  opengraphAuthor?: Maybe<StringQueryOperatorInput>;
  opengraphDescription?: Maybe<StringQueryOperatorInput>;
  opengraphImage?: Maybe<WpMediaItemFilterInput>;
  opengraphModifiedTime?: Maybe<StringQueryOperatorInput>;
  opengraphPublishedTime?: Maybe<StringQueryOperatorInput>;
  opengraphPublisher?: Maybe<StringQueryOperatorInput>;
  opengraphSiteName?: Maybe<StringQueryOperatorInput>;
  opengraphTitle?: Maybe<StringQueryOperatorInput>;
  opengraphType?: Maybe<StringQueryOperatorInput>;
  opengraphUrl?: Maybe<StringQueryOperatorInput>;
  schema?: Maybe<WpSeoTaxonomySchemaFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  twitterDescription?: Maybe<StringQueryOperatorInput>;
  twitterImage?: Maybe<WpMediaItemFilterInput>;
  twitterTitle?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoTaxonomySchemaFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type WpCategoryToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

export type WpPostToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

export type WpPostToPostFormatConnectionFilterInput = {
  nodes?: Maybe<WpPostFormatFilterListInput>;
};

export type WpPostFormatFilterListInput = {
  elemMatch?: Maybe<WpPostFormatFilterInput>;
};

export type WpPostFormatFilterInput = {
  contentNodes?: Maybe<WpPostFormatToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpPostFormatToPostConnectionFilterInput>;
  seo?: Maybe<WpTaxonomySeoFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpPostFormatToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

export type WpPostFormatToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

export type WpPostFormatToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

export type WpPostToTagConnectionFilterInput = {
  nodes?: Maybe<WpTagFilterListInput>;
};

export type WpTagFilterListInput = {
  elemMatch?: Maybe<WpTagFilterInput>;
};

export type WpTagFilterInput = {
  contentNodes?: Maybe<WpTagToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpTagToPostConnectionFilterInput>;
  seo?: Maybe<WpTaxonomySeoFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpTagToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

export type WpTagToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

export type WpTagToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

export type WpPostToTermNodeConnectionFilterInput = {
  nodes?: Maybe<WpTermNodeFilterListInput>;
};

export type WpTermNodeFilterListInput = {
  elemMatch?: Maybe<WpTermNodeFilterInput>;
};

export type WpTermNodeFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpUserToUserRoleConnectionFilterInput = {
  nodes?: Maybe<WpUserRoleFilterListInput>;
};

export type WpUserRoleFilterListInput = {
  elemMatch?: Maybe<WpUserRoleFilterInput>;
};

export type WpUserRoleFilterInput = {
  capabilities?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpSeoUserFilterInput = {
  fullHead?: Maybe<StringQueryOperatorInput>;
  metaDesc?: Maybe<StringQueryOperatorInput>;
  metaRobotsNofollow?: Maybe<StringQueryOperatorInput>;
  metaRobotsNoindex?: Maybe<StringQueryOperatorInput>;
  schema?: Maybe<WpSeoUserSchemaFilterInput>;
  social?: Maybe<WpSeoUserSocialFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoUserSchemaFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoUserSocialFilterInput = {
  facebook?: Maybe<StringQueryOperatorInput>;
  instagram?: Maybe<StringQueryOperatorInput>;
  linkedIn?: Maybe<StringQueryOperatorInput>;
  mySpace?: Maybe<StringQueryOperatorInput>;
  pinterest?: Maybe<StringQueryOperatorInput>;
  soundCloud?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  wikipedia?: Maybe<StringQueryOperatorInput>;
  youTube?: Maybe<StringQueryOperatorInput>;
};

export type WpPostTypeLabelDetailsFilterInput = {
  addNew?: Maybe<StringQueryOperatorInput>;
  addNewItem?: Maybe<StringQueryOperatorInput>;
  allItems?: Maybe<StringQueryOperatorInput>;
  archives?: Maybe<StringQueryOperatorInput>;
  attributes?: Maybe<StringQueryOperatorInput>;
  editItem?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<StringQueryOperatorInput>;
  filterItemsList?: Maybe<StringQueryOperatorInput>;
  insertIntoItem?: Maybe<StringQueryOperatorInput>;
  itemsList?: Maybe<StringQueryOperatorInput>;
  itemsListNavigation?: Maybe<StringQueryOperatorInput>;
  menuName?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  newItem?: Maybe<StringQueryOperatorInput>;
  notFound?: Maybe<StringQueryOperatorInput>;
  notFoundInTrash?: Maybe<StringQueryOperatorInput>;
  parentItemColon?: Maybe<StringQueryOperatorInput>;
  removeFeaturedImage?: Maybe<StringQueryOperatorInput>;
  searchItems?: Maybe<StringQueryOperatorInput>;
  setFeaturedImage?: Maybe<StringQueryOperatorInput>;
  singularName?: Maybe<StringQueryOperatorInput>;
  uploadedToThisItem?: Maybe<StringQueryOperatorInput>;
  useFeaturedImage?: Maybe<StringQueryOperatorInput>;
  viewItem?: Maybe<StringQueryOperatorInput>;
  viewItems?: Maybe<StringQueryOperatorInput>;
};

export type WpContentNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentNodeEdge>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpContentNodeGroupConnection>;
};


export type WpContentNodeConnectionDistinctArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionMaxArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionMinArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionSumArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpContentNodeFieldsEnum;
};

export type WpContentNodeEdge = {
  next?: Maybe<WpContentNode>;
  node: WpContentNode;
  previous?: Maybe<WpContentNode>;
};

export type WpContentNodeFieldsEnum =
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'guid'
  | 'id'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___seo___fullHead'
  | 'lastEditedBy___node___seo___metaDesc'
  | 'lastEditedBy___node___seo___metaRobotsNofollow'
  | 'lastEditedBy___node___seo___metaRobotsNoindex'
  | 'lastEditedBy___node___seo___title'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'slug'
  | 'status'
  | 'template___templateName'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpContentNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentNodeEdge>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpContentNodeSortInput = {
  fields?: Maybe<Array<Maybe<WpContentNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentTypeEdge>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpContentTypeGroupConnection>;
};


export type WpContentTypeConnectionDistinctArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionMaxArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionMinArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionSumArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpContentTypeFieldsEnum;
};

export type WpContentTypeEdge = {
  next?: Maybe<WpContentType>;
  node: WpContentType;
  previous?: Maybe<WpContentType>;
};

export type WpContentTypeFieldsEnum =
  | 'archivePath'
  | 'canExport'
  | 'connectedTaxonomies___nodes'
  | 'connectedTaxonomies___nodes___archivePath'
  | 'connectedTaxonomies___nodes___connectedContentTypes___nodes'
  | 'connectedTaxonomies___nodes___description'
  | 'connectedTaxonomies___nodes___graphqlPluralName'
  | 'connectedTaxonomies___nodes___graphqlSingleName'
  | 'connectedTaxonomies___nodes___hierarchical'
  | 'connectedTaxonomies___nodes___id'
  | 'connectedTaxonomies___nodes___label'
  | 'connectedTaxonomies___nodes___name'
  | 'connectedTaxonomies___nodes___public'
  | 'connectedTaxonomies___nodes___restBase'
  | 'connectedTaxonomies___nodes___restControllerClass'
  | 'connectedTaxonomies___nodes___showCloud'
  | 'connectedTaxonomies___nodes___showInAdminColumn'
  | 'connectedTaxonomies___nodes___showInGraphql'
  | 'connectedTaxonomies___nodes___showInMenu'
  | 'connectedTaxonomies___nodes___showInNavMenus'
  | 'connectedTaxonomies___nodes___showInQuickEdit'
  | 'connectedTaxonomies___nodes___showInRest'
  | 'connectedTaxonomies___nodes___showUi'
  | 'connectedTaxonomies___nodes___nodeType'
  | 'connectedTaxonomies___nodes___parent___id'
  | 'connectedTaxonomies___nodes___parent___children'
  | 'connectedTaxonomies___nodes___children'
  | 'connectedTaxonomies___nodes___children___id'
  | 'connectedTaxonomies___nodes___children___children'
  | 'connectedTaxonomies___nodes___internal___content'
  | 'connectedTaxonomies___nodes___internal___contentDigest'
  | 'connectedTaxonomies___nodes___internal___description'
  | 'connectedTaxonomies___nodes___internal___fieldOwners'
  | 'connectedTaxonomies___nodes___internal___ignoreType'
  | 'connectedTaxonomies___nodes___internal___mediaType'
  | 'connectedTaxonomies___nodes___internal___owner'
  | 'connectedTaxonomies___nodes___internal___type'
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'contentNodes___nodes___parent___id'
  | 'contentNodes___nodes___parent___children'
  | 'contentNodes___nodes___children'
  | 'contentNodes___nodes___children___id'
  | 'contentNodes___nodes___children___children'
  | 'contentNodes___nodes___internal___content'
  | 'contentNodes___nodes___internal___contentDigest'
  | 'contentNodes___nodes___internal___description'
  | 'contentNodes___nodes___internal___fieldOwners'
  | 'contentNodes___nodes___internal___ignoreType'
  | 'contentNodes___nodes___internal___mediaType'
  | 'contentNodes___nodes___internal___owner'
  | 'contentNodes___nodes___internal___type'
  | 'deleteWithUser'
  | 'description'
  | 'excludeFromSearch'
  | 'graphqlPluralName'
  | 'graphqlSingleName'
  | 'hasArchive'
  | 'hierarchical'
  | 'id'
  | 'isFrontPage'
  | 'isPostsPage'
  | 'label'
  | 'labels___addNew'
  | 'labels___addNewItem'
  | 'labels___allItems'
  | 'labels___archives'
  | 'labels___attributes'
  | 'labels___editItem'
  | 'labels___featuredImage'
  | 'labels___filterItemsList'
  | 'labels___insertIntoItem'
  | 'labels___itemsList'
  | 'labels___itemsListNavigation'
  | 'labels___menuName'
  | 'labels___name'
  | 'labels___newItem'
  | 'labels___notFound'
  | 'labels___notFoundInTrash'
  | 'labels___parentItemColon'
  | 'labels___removeFeaturedImage'
  | 'labels___searchItems'
  | 'labels___setFeaturedImage'
  | 'labels___singularName'
  | 'labels___uploadedToThisItem'
  | 'labels___useFeaturedImage'
  | 'labels___viewItem'
  | 'labels___viewItems'
  | 'menuIcon'
  | 'menuPosition'
  | 'name'
  | 'public'
  | 'publiclyQueryable'
  | 'restBase'
  | 'restControllerClass'
  | 'showInAdminBar'
  | 'showInGraphql'
  | 'showInMenu'
  | 'showInNavMenus'
  | 'showInRest'
  | 'showUi'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentTypeEdge>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<WpContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpTaxonomyConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTaxonomyEdge>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpTaxonomyGroupConnection>;
};


export type WpTaxonomyConnectionDistinctArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionMaxArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionMinArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionSumArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTaxonomyFieldsEnum;
};

export type WpTaxonomyEdge = {
  next?: Maybe<WpTaxonomy>;
  node: WpTaxonomy;
  previous?: Maybe<WpTaxonomy>;
};

export type WpTaxonomyFieldsEnum =
  | 'archivePath'
  | 'connectedContentTypes___nodes'
  | 'connectedContentTypes___nodes___archivePath'
  | 'connectedContentTypes___nodes___canExport'
  | 'connectedContentTypes___nodes___connectedTaxonomies___nodes'
  | 'connectedContentTypes___nodes___contentNodes___nodes'
  | 'connectedContentTypes___nodes___deleteWithUser'
  | 'connectedContentTypes___nodes___description'
  | 'connectedContentTypes___nodes___excludeFromSearch'
  | 'connectedContentTypes___nodes___graphqlPluralName'
  | 'connectedContentTypes___nodes___graphqlSingleName'
  | 'connectedContentTypes___nodes___hasArchive'
  | 'connectedContentTypes___nodes___hierarchical'
  | 'connectedContentTypes___nodes___id'
  | 'connectedContentTypes___nodes___isFrontPage'
  | 'connectedContentTypes___nodes___isPostsPage'
  | 'connectedContentTypes___nodes___label'
  | 'connectedContentTypes___nodes___labels___addNew'
  | 'connectedContentTypes___nodes___labels___addNewItem'
  | 'connectedContentTypes___nodes___labels___allItems'
  | 'connectedContentTypes___nodes___labels___archives'
  | 'connectedContentTypes___nodes___labels___attributes'
  | 'connectedContentTypes___nodes___labels___editItem'
  | 'connectedContentTypes___nodes___labels___featuredImage'
  | 'connectedContentTypes___nodes___labels___filterItemsList'
  | 'connectedContentTypes___nodes___labels___insertIntoItem'
  | 'connectedContentTypes___nodes___labels___itemsList'
  | 'connectedContentTypes___nodes___labels___itemsListNavigation'
  | 'connectedContentTypes___nodes___labels___menuName'
  | 'connectedContentTypes___nodes___labels___name'
  | 'connectedContentTypes___nodes___labels___newItem'
  | 'connectedContentTypes___nodes___labels___notFound'
  | 'connectedContentTypes___nodes___labels___notFoundInTrash'
  | 'connectedContentTypes___nodes___labels___parentItemColon'
  | 'connectedContentTypes___nodes___labels___removeFeaturedImage'
  | 'connectedContentTypes___nodes___labels___searchItems'
  | 'connectedContentTypes___nodes___labels___setFeaturedImage'
  | 'connectedContentTypes___nodes___labels___singularName'
  | 'connectedContentTypes___nodes___labels___uploadedToThisItem'
  | 'connectedContentTypes___nodes___labels___useFeaturedImage'
  | 'connectedContentTypes___nodes___labels___viewItem'
  | 'connectedContentTypes___nodes___labels___viewItems'
  | 'connectedContentTypes___nodes___menuIcon'
  | 'connectedContentTypes___nodes___menuPosition'
  | 'connectedContentTypes___nodes___name'
  | 'connectedContentTypes___nodes___public'
  | 'connectedContentTypes___nodes___publiclyQueryable'
  | 'connectedContentTypes___nodes___restBase'
  | 'connectedContentTypes___nodes___restControllerClass'
  | 'connectedContentTypes___nodes___showInAdminBar'
  | 'connectedContentTypes___nodes___showInGraphql'
  | 'connectedContentTypes___nodes___showInMenu'
  | 'connectedContentTypes___nodes___showInNavMenus'
  | 'connectedContentTypes___nodes___showInRest'
  | 'connectedContentTypes___nodes___showUi'
  | 'connectedContentTypes___nodes___uri'
  | 'connectedContentTypes___nodes___nodeType'
  | 'connectedContentTypes___nodes___parent___id'
  | 'connectedContentTypes___nodes___parent___children'
  | 'connectedContentTypes___nodes___children'
  | 'connectedContentTypes___nodes___children___id'
  | 'connectedContentTypes___nodes___children___children'
  | 'connectedContentTypes___nodes___internal___content'
  | 'connectedContentTypes___nodes___internal___contentDigest'
  | 'connectedContentTypes___nodes___internal___description'
  | 'connectedContentTypes___nodes___internal___fieldOwners'
  | 'connectedContentTypes___nodes___internal___ignoreType'
  | 'connectedContentTypes___nodes___internal___mediaType'
  | 'connectedContentTypes___nodes___internal___owner'
  | 'connectedContentTypes___nodes___internal___type'
  | 'description'
  | 'graphqlPluralName'
  | 'graphqlSingleName'
  | 'hierarchical'
  | 'id'
  | 'label'
  | 'name'
  | 'public'
  | 'restBase'
  | 'restControllerClass'
  | 'showCloud'
  | 'showInAdminColumn'
  | 'showInGraphql'
  | 'showInMenu'
  | 'showInNavMenus'
  | 'showInQuickEdit'
  | 'showInRest'
  | 'showUi'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpTaxonomyGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTaxonomyEdge>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTaxonomySortInput = {
  fields?: Maybe<Array<Maybe<WpTaxonomyFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpUserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserEdge>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpUserGroupConnection>;
};


export type WpUserConnectionDistinctArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionMaxArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionMinArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionSumArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpUserFieldsEnum;
};

export type WpUserEdge = {
  next?: Maybe<WpUser>;
  node: WpUser;
  previous?: Maybe<WpUser>;
};

export type WpUserFieldsEnum =
  | 'avatar___default'
  | 'avatar___extraAttr'
  | 'avatar___forceDefault'
  | 'avatar___foundAvatar'
  | 'avatar___height'
  | 'avatar___rating'
  | 'avatar___scheme'
  | 'avatar___size'
  | 'avatar___url'
  | 'avatar___width'
  | 'capKey'
  | 'capabilities'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'databaseId'
  | 'description'
  | 'email'
  | 'extraCapabilities'
  | 'firstName'
  | 'id'
  | 'lastName'
  | 'locale'
  | 'name'
  | 'nicename'
  | 'nickname'
  | 'pages___nodes'
  | 'pages___nodes___ancestors___nodes'
  | 'pages___nodes___authorDatabaseId'
  | 'pages___nodes___authorId'
  | 'pages___nodes___wpChildren___nodes'
  | 'pages___nodes___commentCount'
  | 'pages___nodes___commentStatus'
  | 'pages___nodes___comments___nodes'
  | 'pages___nodes___content'
  | 'pages___nodes___databaseId'
  | 'pages___nodes___date'
  | 'pages___nodes___dateGmt'
  | 'pages___nodes___desiredSlug'
  | 'pages___nodes___enclosure'
  | 'pages___nodes___featuredImageDatabaseId'
  | 'pages___nodes___featuredImageId'
  | 'pages___nodes___guid'
  | 'pages___nodes___id'
  | 'pages___nodes___isFrontPage'
  | 'pages___nodes___isPostsPage'
  | 'pages___nodes___isPrivacyPage'
  | 'pages___nodes___isRevision'
  | 'pages___nodes___link'
  | 'pages___nodes___menuOrder'
  | 'pages___nodes___modified'
  | 'pages___nodes___modifiedGmt'
  | 'pages___nodes___parentDatabaseId'
  | 'pages___nodes___parentId'
  | 'pages___nodes___seo___breadcrumbs'
  | 'pages___nodes___seo___canonical'
  | 'pages___nodes___seo___cornerstone'
  | 'pages___nodes___seo___focuskw'
  | 'pages___nodes___seo___fullHead'
  | 'pages___nodes___seo___metaDesc'
  | 'pages___nodes___seo___metaKeywords'
  | 'pages___nodes___seo___metaRobotsNofollow'
  | 'pages___nodes___seo___metaRobotsNoindex'
  | 'pages___nodes___seo___opengraphAuthor'
  | 'pages___nodes___seo___opengraphDescription'
  | 'pages___nodes___seo___opengraphModifiedTime'
  | 'pages___nodes___seo___opengraphPublishedTime'
  | 'pages___nodes___seo___opengraphPublisher'
  | 'pages___nodes___seo___opengraphSiteName'
  | 'pages___nodes___seo___opengraphTitle'
  | 'pages___nodes___seo___opengraphType'
  | 'pages___nodes___seo___opengraphUrl'
  | 'pages___nodes___seo___readingTime'
  | 'pages___nodes___seo___title'
  | 'pages___nodes___seo___twitterDescription'
  | 'pages___nodes___seo___twitterTitle'
  | 'pages___nodes___slug'
  | 'pages___nodes___status'
  | 'pages___nodes___template___templateName'
  | 'pages___nodes___title'
  | 'pages___nodes___uri'
  | 'pages___nodes___nodeType'
  | 'pages___nodes___parent___id'
  | 'pages___nodes___parent___children'
  | 'pages___nodes___children'
  | 'pages___nodes___children___id'
  | 'pages___nodes___children___children'
  | 'pages___nodes___internal___content'
  | 'pages___nodes___internal___contentDigest'
  | 'pages___nodes___internal___description'
  | 'pages___nodes___internal___fieldOwners'
  | 'pages___nodes___internal___ignoreType'
  | 'pages___nodes___internal___mediaType'
  | 'pages___nodes___internal___owner'
  | 'pages___nodes___internal___type'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___seo___breadcrumbs'
  | 'posts___nodes___seo___canonical'
  | 'posts___nodes___seo___cornerstone'
  | 'posts___nodes___seo___focuskw'
  | 'posts___nodes___seo___fullHead'
  | 'posts___nodes___seo___metaDesc'
  | 'posts___nodes___seo___metaKeywords'
  | 'posts___nodes___seo___metaRobotsNofollow'
  | 'posts___nodes___seo___metaRobotsNoindex'
  | 'posts___nodes___seo___opengraphAuthor'
  | 'posts___nodes___seo___opengraphDescription'
  | 'posts___nodes___seo___opengraphModifiedTime'
  | 'posts___nodes___seo___opengraphPublishedTime'
  | 'posts___nodes___seo___opengraphPublisher'
  | 'posts___nodes___seo___opengraphSiteName'
  | 'posts___nodes___seo___opengraphTitle'
  | 'posts___nodes___seo___opengraphType'
  | 'posts___nodes___seo___opengraphUrl'
  | 'posts___nodes___seo___readingTime'
  | 'posts___nodes___seo___title'
  | 'posts___nodes___seo___twitterDescription'
  | 'posts___nodes___seo___twitterTitle'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'registeredDate'
  | 'roles___nodes'
  | 'roles___nodes___capabilities'
  | 'roles___nodes___displayName'
  | 'roles___nodes___id'
  | 'roles___nodes___name'
  | 'roles___nodes___nodeType'
  | 'roles___nodes___parent___id'
  | 'roles___nodes___parent___children'
  | 'roles___nodes___children'
  | 'roles___nodes___children___id'
  | 'roles___nodes___children___children'
  | 'roles___nodes___internal___content'
  | 'roles___nodes___internal___contentDigest'
  | 'roles___nodes___internal___description'
  | 'roles___nodes___internal___fieldOwners'
  | 'roles___nodes___internal___ignoreType'
  | 'roles___nodes___internal___mediaType'
  | 'roles___nodes___internal___owner'
  | 'roles___nodes___internal___type'
  | 'seo___fullHead'
  | 'seo___metaDesc'
  | 'seo___metaRobotsNofollow'
  | 'seo___metaRobotsNoindex'
  | 'seo___schema___raw'
  | 'seo___social___facebook'
  | 'seo___social___instagram'
  | 'seo___social___linkedIn'
  | 'seo___social___mySpace'
  | 'seo___social___pinterest'
  | 'seo___social___soundCloud'
  | 'seo___social___twitter'
  | 'seo___social___wikipedia'
  | 'seo___social___youTube'
  | 'seo___title'
  | 'slug'
  | 'uri'
  | 'url'
  | 'username'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpUserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserEdge>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpUserSortInput = {
  fields?: Maybe<Array<Maybe<WpUserFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpCommentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCommentEdge>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpCommentGroupConnection>;
};


export type WpCommentConnectionDistinctArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionMaxArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionMinArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionSumArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpCommentFieldsEnum;
};

export type WpCommentEdge = {
  next?: Maybe<WpComment>;
  node: WpComment;
  previous?: Maybe<WpComment>;
};

export type WpCommentFieldsEnum =
  | 'agent'
  | 'approved'
  | 'author___node___databaseId'
  | 'author___node___email'
  | 'author___node___id'
  | 'author___node___name'
  | 'author___node___url'
  | 'authorIp'
  | 'commentedOn___node___databaseId'
  | 'commentedOn___node___date'
  | 'commentedOn___node___dateGmt'
  | 'commentedOn___node___desiredSlug'
  | 'commentedOn___node___enclosure'
  | 'commentedOn___node___guid'
  | 'commentedOn___node___id'
  | 'commentedOn___node___link'
  | 'commentedOn___node___modified'
  | 'commentedOn___node___modifiedGmt'
  | 'commentedOn___node___slug'
  | 'commentedOn___node___status'
  | 'commentedOn___node___template___templateName'
  | 'commentedOn___node___uri'
  | 'commentedOn___node___nodeType'
  | 'commentedOn___node___parent___id'
  | 'commentedOn___node___parent___children'
  | 'commentedOn___node___children'
  | 'commentedOn___node___children___id'
  | 'commentedOn___node___children___children'
  | 'commentedOn___node___internal___content'
  | 'commentedOn___node___internal___contentDigest'
  | 'commentedOn___node___internal___description'
  | 'commentedOn___node___internal___fieldOwners'
  | 'commentedOn___node___internal___ignoreType'
  | 'commentedOn___node___internal___mediaType'
  | 'commentedOn___node___internal___owner'
  | 'commentedOn___node___internal___type'
  | 'content'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'id'
  | 'karma'
  | 'wpParent___node___agent'
  | 'wpParent___node___approved'
  | 'wpParent___node___authorIp'
  | 'wpParent___node___content'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___id'
  | 'wpParent___node___karma'
  | 'wpParent___node___parentDatabaseId'
  | 'wpParent___node___parentId'
  | 'wpParent___node___replies___nodes'
  | 'wpParent___node___type'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'replies___nodes'
  | 'replies___nodes___agent'
  | 'replies___nodes___approved'
  | 'replies___nodes___authorIp'
  | 'replies___nodes___content'
  | 'replies___nodes___databaseId'
  | 'replies___nodes___date'
  | 'replies___nodes___dateGmt'
  | 'replies___nodes___id'
  | 'replies___nodes___karma'
  | 'replies___nodes___parentDatabaseId'
  | 'replies___nodes___parentId'
  | 'replies___nodes___replies___nodes'
  | 'replies___nodes___type'
  | 'replies___nodes___nodeType'
  | 'replies___nodes___parent___id'
  | 'replies___nodes___parent___children'
  | 'replies___nodes___children'
  | 'replies___nodes___children___id'
  | 'replies___nodes___children___children'
  | 'replies___nodes___internal___content'
  | 'replies___nodes___internal___contentDigest'
  | 'replies___nodes___internal___description'
  | 'replies___nodes___internal___fieldOwners'
  | 'replies___nodes___internal___ignoreType'
  | 'replies___nodes___internal___mediaType'
  | 'replies___nodes___internal___owner'
  | 'replies___nodes___internal___type'
  | 'type'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpCommentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCommentEdge>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpCommentSortInput = {
  fields?: Maybe<Array<Maybe<WpCommentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpMediaItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMediaItemEdge>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpMediaItemGroupConnection>;
};


export type WpMediaItemConnectionDistinctArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionMaxArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionMinArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionSumArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMediaItemFieldsEnum;
};

export type WpMediaItemEdge = {
  next?: Maybe<WpMediaItem>;
  node: WpMediaItem;
  previous?: Maybe<WpMediaItem>;
};

export type WpMediaItemFieldsEnum =
  | 'altText'
  | 'ancestors___nodes'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___date'
  | 'ancestors___nodes___dateGmt'
  | 'ancestors___nodes___desiredSlug'
  | 'ancestors___nodes___enclosure'
  | 'ancestors___nodes___guid'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___modified'
  | 'ancestors___nodes___modifiedGmt'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___status'
  | 'ancestors___nodes___template___templateName'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'ancestors___nodes___parent___id'
  | 'ancestors___nodes___parent___children'
  | 'ancestors___nodes___children'
  | 'ancestors___nodes___children___id'
  | 'ancestors___nodes___children___children'
  | 'ancestors___nodes___internal___content'
  | 'ancestors___nodes___internal___contentDigest'
  | 'ancestors___nodes___internal___description'
  | 'ancestors___nodes___internal___fieldOwners'
  | 'ancestors___nodes___internal___ignoreType'
  | 'ancestors___nodes___internal___mediaType'
  | 'ancestors___nodes___internal___owner'
  | 'ancestors___nodes___internal___type'
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___seo___fullHead'
  | 'author___node___seo___metaDesc'
  | 'author___node___seo___metaRobotsNofollow'
  | 'author___node___seo___metaRobotsNoindex'
  | 'author___node___seo___title'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'caption'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___date'
  | 'wpChildren___nodes___dateGmt'
  | 'wpChildren___nodes___desiredSlug'
  | 'wpChildren___nodes___enclosure'
  | 'wpChildren___nodes___guid'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___modified'
  | 'wpChildren___nodes___modifiedGmt'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___status'
  | 'wpChildren___nodes___template___templateName'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'wpChildren___nodes___parent___id'
  | 'wpChildren___nodes___parent___children'
  | 'wpChildren___nodes___children'
  | 'wpChildren___nodes___children___id'
  | 'wpChildren___nodes___children___children'
  | 'wpChildren___nodes___internal___content'
  | 'wpChildren___nodes___internal___contentDigest'
  | 'wpChildren___nodes___internal___description'
  | 'wpChildren___nodes___internal___fieldOwners'
  | 'wpChildren___nodes___internal___ignoreType'
  | 'wpChildren___nodes___internal___mediaType'
  | 'wpChildren___nodes___internal___owner'
  | 'wpChildren___nodes___internal___type'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'description'
  | 'desiredSlug'
  | 'enclosure'
  | 'fileSize'
  | 'guid'
  | 'id'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___seo___fullHead'
  | 'lastEditedBy___node___seo___metaDesc'
  | 'lastEditedBy___node___seo___metaRobotsNofollow'
  | 'lastEditedBy___node___seo___metaRobotsNoindex'
  | 'lastEditedBy___node___seo___title'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'mediaDetails___file'
  | 'mediaDetails___height'
  | 'mediaDetails___meta___aperture'
  | 'mediaDetails___meta___camera'
  | 'mediaDetails___meta___caption'
  | 'mediaDetails___meta___copyright'
  | 'mediaDetails___meta___createdTimestamp'
  | 'mediaDetails___meta___credit'
  | 'mediaDetails___meta___focalLength'
  | 'mediaDetails___meta___iso'
  | 'mediaDetails___meta___keywords'
  | 'mediaDetails___meta___orientation'
  | 'mediaDetails___meta___shutterSpeed'
  | 'mediaDetails___meta___title'
  | 'mediaDetails___sizes'
  | 'mediaDetails___sizes___file'
  | 'mediaDetails___sizes___fileSize'
  | 'mediaDetails___sizes___height'
  | 'mediaDetails___sizes___mimeType'
  | 'mediaDetails___sizes___name'
  | 'mediaDetails___sizes___sourceUrl'
  | 'mediaDetails___sizes___width'
  | 'mediaDetails___width'
  | 'mediaItemUrl'
  | 'mediaType'
  | 'mimeType'
  | 'modified'
  | 'modifiedGmt'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___desiredSlug'
  | 'wpParent___node___enclosure'
  | 'wpParent___node___guid'
  | 'wpParent___node___id'
  | 'wpParent___node___link'
  | 'wpParent___node___modified'
  | 'wpParent___node___modifiedGmt'
  | 'wpParent___node___slug'
  | 'wpParent___node___status'
  | 'wpParent___node___template___templateName'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'seo___breadcrumbs'
  | 'seo___breadcrumbs___text'
  | 'seo___breadcrumbs___url'
  | 'seo___canonical'
  | 'seo___cornerstone'
  | 'seo___focuskw'
  | 'seo___fullHead'
  | 'seo___metaDesc'
  | 'seo___metaKeywords'
  | 'seo___metaRobotsNofollow'
  | 'seo___metaRobotsNoindex'
  | 'seo___opengraphAuthor'
  | 'seo___opengraphDescription'
  | 'seo___opengraphImage___altText'
  | 'seo___opengraphImage___ancestors___nodes'
  | 'seo___opengraphImage___authorDatabaseId'
  | 'seo___opengraphImage___authorId'
  | 'seo___opengraphImage___caption'
  | 'seo___opengraphImage___wpChildren___nodes'
  | 'seo___opengraphImage___commentCount'
  | 'seo___opengraphImage___commentStatus'
  | 'seo___opengraphImage___comments___nodes'
  | 'seo___opengraphImage___databaseId'
  | 'seo___opengraphImage___date'
  | 'seo___opengraphImage___dateGmt'
  | 'seo___opengraphImage___description'
  | 'seo___opengraphImage___desiredSlug'
  | 'seo___opengraphImage___enclosure'
  | 'seo___opengraphImage___fileSize'
  | 'seo___opengraphImage___guid'
  | 'seo___opengraphImage___id'
  | 'seo___opengraphImage___link'
  | 'seo___opengraphImage___mediaDetails___file'
  | 'seo___opengraphImage___mediaDetails___height'
  | 'seo___opengraphImage___mediaDetails___sizes'
  | 'seo___opengraphImage___mediaDetails___width'
  | 'seo___opengraphImage___mediaItemUrl'
  | 'seo___opengraphImage___mediaType'
  | 'seo___opengraphImage___mimeType'
  | 'seo___opengraphImage___modified'
  | 'seo___opengraphImage___modifiedGmt'
  | 'seo___opengraphImage___parentDatabaseId'
  | 'seo___opengraphImage___parentId'
  | 'seo___opengraphImage___seo___breadcrumbs'
  | 'seo___opengraphImage___seo___canonical'
  | 'seo___opengraphImage___seo___cornerstone'
  | 'seo___opengraphImage___seo___focuskw'
  | 'seo___opengraphImage___seo___fullHead'
  | 'seo___opengraphImage___seo___metaDesc'
  | 'seo___opengraphImage___seo___metaKeywords'
  | 'seo___opengraphImage___seo___metaRobotsNofollow'
  | 'seo___opengraphImage___seo___metaRobotsNoindex'
  | 'seo___opengraphImage___seo___opengraphAuthor'
  | 'seo___opengraphImage___seo___opengraphDescription'
  | 'seo___opengraphImage___seo___opengraphModifiedTime'
  | 'seo___opengraphImage___seo___opengraphPublishedTime'
  | 'seo___opengraphImage___seo___opengraphPublisher'
  | 'seo___opengraphImage___seo___opengraphSiteName'
  | 'seo___opengraphImage___seo___opengraphTitle'
  | 'seo___opengraphImage___seo___opengraphType'
  | 'seo___opengraphImage___seo___opengraphUrl'
  | 'seo___opengraphImage___seo___readingTime'
  | 'seo___opengraphImage___seo___title'
  | 'seo___opengraphImage___seo___twitterDescription'
  | 'seo___opengraphImage___seo___twitterTitle'
  | 'seo___opengraphImage___sizes'
  | 'seo___opengraphImage___slug'
  | 'seo___opengraphImage___sourceUrl'
  | 'seo___opengraphImage___srcSet'
  | 'seo___opengraphImage___status'
  | 'seo___opengraphImage___template___templateName'
  | 'seo___opengraphImage___title'
  | 'seo___opengraphImage___uri'
  | 'seo___opengraphImage___nodeType'
  | 'seo___opengraphImage___remoteFile___sourceInstanceName'
  | 'seo___opengraphImage___remoteFile___absolutePath'
  | 'seo___opengraphImage___remoteFile___relativePath'
  | 'seo___opengraphImage___remoteFile___extension'
  | 'seo___opengraphImage___remoteFile___size'
  | 'seo___opengraphImage___remoteFile___prettySize'
  | 'seo___opengraphImage___remoteFile___modifiedTime'
  | 'seo___opengraphImage___remoteFile___accessTime'
  | 'seo___opengraphImage___remoteFile___changeTime'
  | 'seo___opengraphImage___remoteFile___birthTime'
  | 'seo___opengraphImage___remoteFile___root'
  | 'seo___opengraphImage___remoteFile___dir'
  | 'seo___opengraphImage___remoteFile___base'
  | 'seo___opengraphImage___remoteFile___ext'
  | 'seo___opengraphImage___remoteFile___name'
  | 'seo___opengraphImage___remoteFile___relativeDirectory'
  | 'seo___opengraphImage___remoteFile___dev'
  | 'seo___opengraphImage___remoteFile___mode'
  | 'seo___opengraphImage___remoteFile___nlink'
  | 'seo___opengraphImage___remoteFile___uid'
  | 'seo___opengraphImage___remoteFile___gid'
  | 'seo___opengraphImage___remoteFile___rdev'
  | 'seo___opengraphImage___remoteFile___ino'
  | 'seo___opengraphImage___remoteFile___atimeMs'
  | 'seo___opengraphImage___remoteFile___mtimeMs'
  | 'seo___opengraphImage___remoteFile___ctimeMs'
  | 'seo___opengraphImage___remoteFile___atime'
  | 'seo___opengraphImage___remoteFile___mtime'
  | 'seo___opengraphImage___remoteFile___ctime'
  | 'seo___opengraphImage___remoteFile___birthtime'
  | 'seo___opengraphImage___remoteFile___birthtimeMs'
  | 'seo___opengraphImage___remoteFile___blksize'
  | 'seo___opengraphImage___remoteFile___blocks'
  | 'seo___opengraphImage___remoteFile___publicURL'
  | 'seo___opengraphImage___remoteFile___childrenImageSharp'
  | 'seo___opengraphImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___remoteFile___id'
  | 'seo___opengraphImage___remoteFile___children'
  | 'seo___opengraphImage___localFile___sourceInstanceName'
  | 'seo___opengraphImage___localFile___absolutePath'
  | 'seo___opengraphImage___localFile___relativePath'
  | 'seo___opengraphImage___localFile___extension'
  | 'seo___opengraphImage___localFile___size'
  | 'seo___opengraphImage___localFile___prettySize'
  | 'seo___opengraphImage___localFile___modifiedTime'
  | 'seo___opengraphImage___localFile___accessTime'
  | 'seo___opengraphImage___localFile___changeTime'
  | 'seo___opengraphImage___localFile___birthTime'
  | 'seo___opengraphImage___localFile___root'
  | 'seo___opengraphImage___localFile___dir'
  | 'seo___opengraphImage___localFile___base'
  | 'seo___opengraphImage___localFile___ext'
  | 'seo___opengraphImage___localFile___name'
  | 'seo___opengraphImage___localFile___relativeDirectory'
  | 'seo___opengraphImage___localFile___dev'
  | 'seo___opengraphImage___localFile___mode'
  | 'seo___opengraphImage___localFile___nlink'
  | 'seo___opengraphImage___localFile___uid'
  | 'seo___opengraphImage___localFile___gid'
  | 'seo___opengraphImage___localFile___rdev'
  | 'seo___opengraphImage___localFile___ino'
  | 'seo___opengraphImage___localFile___atimeMs'
  | 'seo___opengraphImage___localFile___mtimeMs'
  | 'seo___opengraphImage___localFile___ctimeMs'
  | 'seo___opengraphImage___localFile___atime'
  | 'seo___opengraphImage___localFile___mtime'
  | 'seo___opengraphImage___localFile___ctime'
  | 'seo___opengraphImage___localFile___birthtime'
  | 'seo___opengraphImage___localFile___birthtimeMs'
  | 'seo___opengraphImage___localFile___blksize'
  | 'seo___opengraphImage___localFile___blocks'
  | 'seo___opengraphImage___localFile___publicURL'
  | 'seo___opengraphImage___localFile___childrenImageSharp'
  | 'seo___opengraphImage___localFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___localFile___id'
  | 'seo___opengraphImage___localFile___children'
  | 'seo___opengraphImage___parent___id'
  | 'seo___opengraphImage___parent___children'
  | 'seo___opengraphImage___children'
  | 'seo___opengraphImage___children___id'
  | 'seo___opengraphImage___children___children'
  | 'seo___opengraphImage___internal___content'
  | 'seo___opengraphImage___internal___contentDigest'
  | 'seo___opengraphImage___internal___description'
  | 'seo___opengraphImage___internal___fieldOwners'
  | 'seo___opengraphImage___internal___ignoreType'
  | 'seo___opengraphImage___internal___mediaType'
  | 'seo___opengraphImage___internal___owner'
  | 'seo___opengraphImage___internal___type'
  | 'seo___opengraphModifiedTime'
  | 'seo___opengraphPublishedTime'
  | 'seo___opengraphPublisher'
  | 'seo___opengraphSiteName'
  | 'seo___opengraphTitle'
  | 'seo___opengraphType'
  | 'seo___opengraphUrl'
  | 'seo___readingTime'
  | 'seo___schema___articleType'
  | 'seo___schema___pageType'
  | 'seo___schema___raw'
  | 'seo___title'
  | 'seo___twitterDescription'
  | 'seo___twitterImage___altText'
  | 'seo___twitterImage___ancestors___nodes'
  | 'seo___twitterImage___authorDatabaseId'
  | 'seo___twitterImage___authorId'
  | 'seo___twitterImage___caption'
  | 'seo___twitterImage___wpChildren___nodes'
  | 'seo___twitterImage___commentCount'
  | 'seo___twitterImage___commentStatus'
  | 'seo___twitterImage___comments___nodes'
  | 'seo___twitterImage___databaseId'
  | 'seo___twitterImage___date'
  | 'seo___twitterImage___dateGmt'
  | 'seo___twitterImage___description'
  | 'seo___twitterImage___desiredSlug'
  | 'seo___twitterImage___enclosure'
  | 'seo___twitterImage___fileSize'
  | 'seo___twitterImage___guid'
  | 'seo___twitterImage___id'
  | 'seo___twitterImage___link'
  | 'seo___twitterImage___mediaDetails___file'
  | 'seo___twitterImage___mediaDetails___height'
  | 'seo___twitterImage___mediaDetails___sizes'
  | 'seo___twitterImage___mediaDetails___width'
  | 'seo___twitterImage___mediaItemUrl'
  | 'seo___twitterImage___mediaType'
  | 'seo___twitterImage___mimeType'
  | 'seo___twitterImage___modified'
  | 'seo___twitterImage___modifiedGmt'
  | 'seo___twitterImage___parentDatabaseId'
  | 'seo___twitterImage___parentId'
  | 'seo___twitterImage___seo___breadcrumbs'
  | 'seo___twitterImage___seo___canonical'
  | 'seo___twitterImage___seo___cornerstone'
  | 'seo___twitterImage___seo___focuskw'
  | 'seo___twitterImage___seo___fullHead'
  | 'seo___twitterImage___seo___metaDesc'
  | 'seo___twitterImage___seo___metaKeywords'
  | 'seo___twitterImage___seo___metaRobotsNofollow'
  | 'seo___twitterImage___seo___metaRobotsNoindex'
  | 'seo___twitterImage___seo___opengraphAuthor'
  | 'seo___twitterImage___seo___opengraphDescription'
  | 'seo___twitterImage___seo___opengraphModifiedTime'
  | 'seo___twitterImage___seo___opengraphPublishedTime'
  | 'seo___twitterImage___seo___opengraphPublisher'
  | 'seo___twitterImage___seo___opengraphSiteName'
  | 'seo___twitterImage___seo___opengraphTitle'
  | 'seo___twitterImage___seo___opengraphType'
  | 'seo___twitterImage___seo___opengraphUrl'
  | 'seo___twitterImage___seo___readingTime'
  | 'seo___twitterImage___seo___title'
  | 'seo___twitterImage___seo___twitterDescription'
  | 'seo___twitterImage___seo___twitterTitle'
  | 'seo___twitterImage___sizes'
  | 'seo___twitterImage___slug'
  | 'seo___twitterImage___sourceUrl'
  | 'seo___twitterImage___srcSet'
  | 'seo___twitterImage___status'
  | 'seo___twitterImage___template___templateName'
  | 'seo___twitterImage___title'
  | 'seo___twitterImage___uri'
  | 'seo___twitterImage___nodeType'
  | 'seo___twitterImage___remoteFile___sourceInstanceName'
  | 'seo___twitterImage___remoteFile___absolutePath'
  | 'seo___twitterImage___remoteFile___relativePath'
  | 'seo___twitterImage___remoteFile___extension'
  | 'seo___twitterImage___remoteFile___size'
  | 'seo___twitterImage___remoteFile___prettySize'
  | 'seo___twitterImage___remoteFile___modifiedTime'
  | 'seo___twitterImage___remoteFile___accessTime'
  | 'seo___twitterImage___remoteFile___changeTime'
  | 'seo___twitterImage___remoteFile___birthTime'
  | 'seo___twitterImage___remoteFile___root'
  | 'seo___twitterImage___remoteFile___dir'
  | 'seo___twitterImage___remoteFile___base'
  | 'seo___twitterImage___remoteFile___ext'
  | 'seo___twitterImage___remoteFile___name'
  | 'seo___twitterImage___remoteFile___relativeDirectory'
  | 'seo___twitterImage___remoteFile___dev'
  | 'seo___twitterImage___remoteFile___mode'
  | 'seo___twitterImage___remoteFile___nlink'
  | 'seo___twitterImage___remoteFile___uid'
  | 'seo___twitterImage___remoteFile___gid'
  | 'seo___twitterImage___remoteFile___rdev'
  | 'seo___twitterImage___remoteFile___ino'
  | 'seo___twitterImage___remoteFile___atimeMs'
  | 'seo___twitterImage___remoteFile___mtimeMs'
  | 'seo___twitterImage___remoteFile___ctimeMs'
  | 'seo___twitterImage___remoteFile___atime'
  | 'seo___twitterImage___remoteFile___mtime'
  | 'seo___twitterImage___remoteFile___ctime'
  | 'seo___twitterImage___remoteFile___birthtime'
  | 'seo___twitterImage___remoteFile___birthtimeMs'
  | 'seo___twitterImage___remoteFile___blksize'
  | 'seo___twitterImage___remoteFile___blocks'
  | 'seo___twitterImage___remoteFile___publicURL'
  | 'seo___twitterImage___remoteFile___childrenImageSharp'
  | 'seo___twitterImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___remoteFile___id'
  | 'seo___twitterImage___remoteFile___children'
  | 'seo___twitterImage___localFile___sourceInstanceName'
  | 'seo___twitterImage___localFile___absolutePath'
  | 'seo___twitterImage___localFile___relativePath'
  | 'seo___twitterImage___localFile___extension'
  | 'seo___twitterImage___localFile___size'
  | 'seo___twitterImage___localFile___prettySize'
  | 'seo___twitterImage___localFile___modifiedTime'
  | 'seo___twitterImage___localFile___accessTime'
  | 'seo___twitterImage___localFile___changeTime'
  | 'seo___twitterImage___localFile___birthTime'
  | 'seo___twitterImage___localFile___root'
  | 'seo___twitterImage___localFile___dir'
  | 'seo___twitterImage___localFile___base'
  | 'seo___twitterImage___localFile___ext'
  | 'seo___twitterImage___localFile___name'
  | 'seo___twitterImage___localFile___relativeDirectory'
  | 'seo___twitterImage___localFile___dev'
  | 'seo___twitterImage___localFile___mode'
  | 'seo___twitterImage___localFile___nlink'
  | 'seo___twitterImage___localFile___uid'
  | 'seo___twitterImage___localFile___gid'
  | 'seo___twitterImage___localFile___rdev'
  | 'seo___twitterImage___localFile___ino'
  | 'seo___twitterImage___localFile___atimeMs'
  | 'seo___twitterImage___localFile___mtimeMs'
  | 'seo___twitterImage___localFile___ctimeMs'
  | 'seo___twitterImage___localFile___atime'
  | 'seo___twitterImage___localFile___mtime'
  | 'seo___twitterImage___localFile___ctime'
  | 'seo___twitterImage___localFile___birthtime'
  | 'seo___twitterImage___localFile___birthtimeMs'
  | 'seo___twitterImage___localFile___blksize'
  | 'seo___twitterImage___localFile___blocks'
  | 'seo___twitterImage___localFile___publicURL'
  | 'seo___twitterImage___localFile___childrenImageSharp'
  | 'seo___twitterImage___localFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___localFile___id'
  | 'seo___twitterImage___localFile___children'
  | 'seo___twitterImage___parent___id'
  | 'seo___twitterImage___parent___children'
  | 'seo___twitterImage___children'
  | 'seo___twitterImage___children___id'
  | 'seo___twitterImage___children___children'
  | 'seo___twitterImage___internal___content'
  | 'seo___twitterImage___internal___contentDigest'
  | 'seo___twitterImage___internal___description'
  | 'seo___twitterImage___internal___fieldOwners'
  | 'seo___twitterImage___internal___ignoreType'
  | 'seo___twitterImage___internal___mediaType'
  | 'seo___twitterImage___internal___owner'
  | 'seo___twitterImage___internal___type'
  | 'seo___twitterTitle'
  | 'sizes'
  | 'slug'
  | 'sourceUrl'
  | 'srcSet'
  | 'status'
  | 'template___templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'remoteFile___sourceInstanceName'
  | 'remoteFile___absolutePath'
  | 'remoteFile___relativePath'
  | 'remoteFile___extension'
  | 'remoteFile___size'
  | 'remoteFile___prettySize'
  | 'remoteFile___modifiedTime'
  | 'remoteFile___accessTime'
  | 'remoteFile___changeTime'
  | 'remoteFile___birthTime'
  | 'remoteFile___root'
  | 'remoteFile___dir'
  | 'remoteFile___base'
  | 'remoteFile___ext'
  | 'remoteFile___name'
  | 'remoteFile___relativeDirectory'
  | 'remoteFile___dev'
  | 'remoteFile___mode'
  | 'remoteFile___nlink'
  | 'remoteFile___uid'
  | 'remoteFile___gid'
  | 'remoteFile___rdev'
  | 'remoteFile___ino'
  | 'remoteFile___atimeMs'
  | 'remoteFile___mtimeMs'
  | 'remoteFile___ctimeMs'
  | 'remoteFile___atime'
  | 'remoteFile___mtime'
  | 'remoteFile___ctime'
  | 'remoteFile___birthtime'
  | 'remoteFile___birthtimeMs'
  | 'remoteFile___blksize'
  | 'remoteFile___blocks'
  | 'remoteFile___publicURL'
  | 'remoteFile___childrenImageSharp'
  | 'remoteFile___childrenImageSharp___fixed___base64'
  | 'remoteFile___childrenImageSharp___fixed___tracedSVG'
  | 'remoteFile___childrenImageSharp___fixed___aspectRatio'
  | 'remoteFile___childrenImageSharp___fixed___width'
  | 'remoteFile___childrenImageSharp___fixed___height'
  | 'remoteFile___childrenImageSharp___fixed___src'
  | 'remoteFile___childrenImageSharp___fixed___srcSet'
  | 'remoteFile___childrenImageSharp___fixed___srcWebp'
  | 'remoteFile___childrenImageSharp___fixed___srcSetWebp'
  | 'remoteFile___childrenImageSharp___fixed___originalName'
  | 'remoteFile___childrenImageSharp___fluid___base64'
  | 'remoteFile___childrenImageSharp___fluid___tracedSVG'
  | 'remoteFile___childrenImageSharp___fluid___aspectRatio'
  | 'remoteFile___childrenImageSharp___fluid___src'
  | 'remoteFile___childrenImageSharp___fluid___srcSet'
  | 'remoteFile___childrenImageSharp___fluid___srcWebp'
  | 'remoteFile___childrenImageSharp___fluid___srcSetWebp'
  | 'remoteFile___childrenImageSharp___fluid___sizes'
  | 'remoteFile___childrenImageSharp___fluid___originalImg'
  | 'remoteFile___childrenImageSharp___fluid___originalName'
  | 'remoteFile___childrenImageSharp___fluid___presentationWidth'
  | 'remoteFile___childrenImageSharp___fluid___presentationHeight'
  | 'remoteFile___childrenImageSharp___gatsbyImageData'
  | 'remoteFile___childrenImageSharp___original___width'
  | 'remoteFile___childrenImageSharp___original___height'
  | 'remoteFile___childrenImageSharp___original___src'
  | 'remoteFile___childrenImageSharp___resize___src'
  | 'remoteFile___childrenImageSharp___resize___tracedSVG'
  | 'remoteFile___childrenImageSharp___resize___width'
  | 'remoteFile___childrenImageSharp___resize___height'
  | 'remoteFile___childrenImageSharp___resize___aspectRatio'
  | 'remoteFile___childrenImageSharp___resize___originalName'
  | 'remoteFile___childrenImageSharp___id'
  | 'remoteFile___childrenImageSharp___parent___id'
  | 'remoteFile___childrenImageSharp___parent___children'
  | 'remoteFile___childrenImageSharp___children'
  | 'remoteFile___childrenImageSharp___children___id'
  | 'remoteFile___childrenImageSharp___children___children'
  | 'remoteFile___childrenImageSharp___internal___content'
  | 'remoteFile___childrenImageSharp___internal___contentDigest'
  | 'remoteFile___childrenImageSharp___internal___description'
  | 'remoteFile___childrenImageSharp___internal___fieldOwners'
  | 'remoteFile___childrenImageSharp___internal___ignoreType'
  | 'remoteFile___childrenImageSharp___internal___mediaType'
  | 'remoteFile___childrenImageSharp___internal___owner'
  | 'remoteFile___childrenImageSharp___internal___type'
  | 'remoteFile___childImageSharp___fixed___base64'
  | 'remoteFile___childImageSharp___fixed___tracedSVG'
  | 'remoteFile___childImageSharp___fixed___aspectRatio'
  | 'remoteFile___childImageSharp___fixed___width'
  | 'remoteFile___childImageSharp___fixed___height'
  | 'remoteFile___childImageSharp___fixed___src'
  | 'remoteFile___childImageSharp___fixed___srcSet'
  | 'remoteFile___childImageSharp___fixed___srcWebp'
  | 'remoteFile___childImageSharp___fixed___srcSetWebp'
  | 'remoteFile___childImageSharp___fixed___originalName'
  | 'remoteFile___childImageSharp___fluid___base64'
  | 'remoteFile___childImageSharp___fluid___tracedSVG'
  | 'remoteFile___childImageSharp___fluid___aspectRatio'
  | 'remoteFile___childImageSharp___fluid___src'
  | 'remoteFile___childImageSharp___fluid___srcSet'
  | 'remoteFile___childImageSharp___fluid___srcWebp'
  | 'remoteFile___childImageSharp___fluid___srcSetWebp'
  | 'remoteFile___childImageSharp___fluid___sizes'
  | 'remoteFile___childImageSharp___fluid___originalImg'
  | 'remoteFile___childImageSharp___fluid___originalName'
  | 'remoteFile___childImageSharp___fluid___presentationWidth'
  | 'remoteFile___childImageSharp___fluid___presentationHeight'
  | 'remoteFile___childImageSharp___gatsbyImageData'
  | 'remoteFile___childImageSharp___original___width'
  | 'remoteFile___childImageSharp___original___height'
  | 'remoteFile___childImageSharp___original___src'
  | 'remoteFile___childImageSharp___resize___src'
  | 'remoteFile___childImageSharp___resize___tracedSVG'
  | 'remoteFile___childImageSharp___resize___width'
  | 'remoteFile___childImageSharp___resize___height'
  | 'remoteFile___childImageSharp___resize___aspectRatio'
  | 'remoteFile___childImageSharp___resize___originalName'
  | 'remoteFile___childImageSharp___id'
  | 'remoteFile___childImageSharp___parent___id'
  | 'remoteFile___childImageSharp___parent___children'
  | 'remoteFile___childImageSharp___children'
  | 'remoteFile___childImageSharp___children___id'
  | 'remoteFile___childImageSharp___children___children'
  | 'remoteFile___childImageSharp___internal___content'
  | 'remoteFile___childImageSharp___internal___contentDigest'
  | 'remoteFile___childImageSharp___internal___description'
  | 'remoteFile___childImageSharp___internal___fieldOwners'
  | 'remoteFile___childImageSharp___internal___ignoreType'
  | 'remoteFile___childImageSharp___internal___mediaType'
  | 'remoteFile___childImageSharp___internal___owner'
  | 'remoteFile___childImageSharp___internal___type'
  | 'remoteFile___childrenCloudinaryAsset'
  | 'remoteFile___childrenCloudinaryAsset___fixed___aspectRatio'
  | 'remoteFile___childrenCloudinaryAsset___fixed___base64'
  | 'remoteFile___childrenCloudinaryAsset___fixed___height'
  | 'remoteFile___childrenCloudinaryAsset___fixed___src'
  | 'remoteFile___childrenCloudinaryAsset___fixed___srcSet'
  | 'remoteFile___childrenCloudinaryAsset___fixed___tracedSVG'
  | 'remoteFile___childrenCloudinaryAsset___fixed___width'
  | 'remoteFile___childrenCloudinaryAsset___fluid___aspectRatio'
  | 'remoteFile___childrenCloudinaryAsset___fluid___base64'
  | 'remoteFile___childrenCloudinaryAsset___fluid___presentationHeight'
  | 'remoteFile___childrenCloudinaryAsset___fluid___presentationWidth'
  | 'remoteFile___childrenCloudinaryAsset___fluid___sizes'
  | 'remoteFile___childrenCloudinaryAsset___fluid___src'
  | 'remoteFile___childrenCloudinaryAsset___fluid___srcSet'
  | 'remoteFile___childrenCloudinaryAsset___fluid___tracedSVG'
  | 'remoteFile___childrenCloudinaryAsset___id'
  | 'remoteFile___childrenCloudinaryAsset___parent___id'
  | 'remoteFile___childrenCloudinaryAsset___parent___children'
  | 'remoteFile___childrenCloudinaryAsset___children'
  | 'remoteFile___childrenCloudinaryAsset___children___id'
  | 'remoteFile___childrenCloudinaryAsset___children___children'
  | 'remoteFile___childrenCloudinaryAsset___internal___content'
  | 'remoteFile___childrenCloudinaryAsset___internal___contentDigest'
  | 'remoteFile___childrenCloudinaryAsset___internal___description'
  | 'remoteFile___childrenCloudinaryAsset___internal___fieldOwners'
  | 'remoteFile___childrenCloudinaryAsset___internal___ignoreType'
  | 'remoteFile___childrenCloudinaryAsset___internal___mediaType'
  | 'remoteFile___childrenCloudinaryAsset___internal___owner'
  | 'remoteFile___childrenCloudinaryAsset___internal___type'
  | 'remoteFile___childCloudinaryAsset___fixed___aspectRatio'
  | 'remoteFile___childCloudinaryAsset___fixed___base64'
  | 'remoteFile___childCloudinaryAsset___fixed___height'
  | 'remoteFile___childCloudinaryAsset___fixed___src'
  | 'remoteFile___childCloudinaryAsset___fixed___srcSet'
  | 'remoteFile___childCloudinaryAsset___fixed___tracedSVG'
  | 'remoteFile___childCloudinaryAsset___fixed___width'
  | 'remoteFile___childCloudinaryAsset___fluid___aspectRatio'
  | 'remoteFile___childCloudinaryAsset___fluid___base64'
  | 'remoteFile___childCloudinaryAsset___fluid___presentationHeight'
  | 'remoteFile___childCloudinaryAsset___fluid___presentationWidth'
  | 'remoteFile___childCloudinaryAsset___fluid___sizes'
  | 'remoteFile___childCloudinaryAsset___fluid___src'
  | 'remoteFile___childCloudinaryAsset___fluid___srcSet'
  | 'remoteFile___childCloudinaryAsset___fluid___tracedSVG'
  | 'remoteFile___childCloudinaryAsset___id'
  | 'remoteFile___childCloudinaryAsset___parent___id'
  | 'remoteFile___childCloudinaryAsset___parent___children'
  | 'remoteFile___childCloudinaryAsset___children'
  | 'remoteFile___childCloudinaryAsset___children___id'
  | 'remoteFile___childCloudinaryAsset___children___children'
  | 'remoteFile___childCloudinaryAsset___internal___content'
  | 'remoteFile___childCloudinaryAsset___internal___contentDigest'
  | 'remoteFile___childCloudinaryAsset___internal___description'
  | 'remoteFile___childCloudinaryAsset___internal___fieldOwners'
  | 'remoteFile___childCloudinaryAsset___internal___ignoreType'
  | 'remoteFile___childCloudinaryAsset___internal___mediaType'
  | 'remoteFile___childCloudinaryAsset___internal___owner'
  | 'remoteFile___childCloudinaryAsset___internal___type'
  | 'remoteFile___id'
  | 'remoteFile___parent___id'
  | 'remoteFile___parent___parent___id'
  | 'remoteFile___parent___parent___children'
  | 'remoteFile___parent___children'
  | 'remoteFile___parent___children___id'
  | 'remoteFile___parent___children___children'
  | 'remoteFile___parent___internal___content'
  | 'remoteFile___parent___internal___contentDigest'
  | 'remoteFile___parent___internal___description'
  | 'remoteFile___parent___internal___fieldOwners'
  | 'remoteFile___parent___internal___ignoreType'
  | 'remoteFile___parent___internal___mediaType'
  | 'remoteFile___parent___internal___owner'
  | 'remoteFile___parent___internal___type'
  | 'remoteFile___children'
  | 'remoteFile___children___id'
  | 'remoteFile___children___parent___id'
  | 'remoteFile___children___parent___children'
  | 'remoteFile___children___children'
  | 'remoteFile___children___children___id'
  | 'remoteFile___children___children___children'
  | 'remoteFile___children___internal___content'
  | 'remoteFile___children___internal___contentDigest'
  | 'remoteFile___children___internal___description'
  | 'remoteFile___children___internal___fieldOwners'
  | 'remoteFile___children___internal___ignoreType'
  | 'remoteFile___children___internal___mediaType'
  | 'remoteFile___children___internal___owner'
  | 'remoteFile___children___internal___type'
  | 'remoteFile___internal___content'
  | 'remoteFile___internal___contentDigest'
  | 'remoteFile___internal___description'
  | 'remoteFile___internal___fieldOwners'
  | 'remoteFile___internal___ignoreType'
  | 'remoteFile___internal___mediaType'
  | 'remoteFile___internal___owner'
  | 'remoteFile___internal___type'
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___publicURL'
  | 'localFile___childrenImageSharp'
  | 'localFile___childrenImageSharp___fixed___base64'
  | 'localFile___childrenImageSharp___fixed___tracedSVG'
  | 'localFile___childrenImageSharp___fixed___aspectRatio'
  | 'localFile___childrenImageSharp___fixed___width'
  | 'localFile___childrenImageSharp___fixed___height'
  | 'localFile___childrenImageSharp___fixed___src'
  | 'localFile___childrenImageSharp___fixed___srcSet'
  | 'localFile___childrenImageSharp___fixed___srcWebp'
  | 'localFile___childrenImageSharp___fixed___srcSetWebp'
  | 'localFile___childrenImageSharp___fixed___originalName'
  | 'localFile___childrenImageSharp___fluid___base64'
  | 'localFile___childrenImageSharp___fluid___tracedSVG'
  | 'localFile___childrenImageSharp___fluid___aspectRatio'
  | 'localFile___childrenImageSharp___fluid___src'
  | 'localFile___childrenImageSharp___fluid___srcSet'
  | 'localFile___childrenImageSharp___fluid___srcWebp'
  | 'localFile___childrenImageSharp___fluid___srcSetWebp'
  | 'localFile___childrenImageSharp___fluid___sizes'
  | 'localFile___childrenImageSharp___fluid___originalImg'
  | 'localFile___childrenImageSharp___fluid___originalName'
  | 'localFile___childrenImageSharp___fluid___presentationWidth'
  | 'localFile___childrenImageSharp___fluid___presentationHeight'
  | 'localFile___childrenImageSharp___gatsbyImageData'
  | 'localFile___childrenImageSharp___original___width'
  | 'localFile___childrenImageSharp___original___height'
  | 'localFile___childrenImageSharp___original___src'
  | 'localFile___childrenImageSharp___resize___src'
  | 'localFile___childrenImageSharp___resize___tracedSVG'
  | 'localFile___childrenImageSharp___resize___width'
  | 'localFile___childrenImageSharp___resize___height'
  | 'localFile___childrenImageSharp___resize___aspectRatio'
  | 'localFile___childrenImageSharp___resize___originalName'
  | 'localFile___childrenImageSharp___id'
  | 'localFile___childrenImageSharp___parent___id'
  | 'localFile___childrenImageSharp___parent___children'
  | 'localFile___childrenImageSharp___children'
  | 'localFile___childrenImageSharp___children___id'
  | 'localFile___childrenImageSharp___children___children'
  | 'localFile___childrenImageSharp___internal___content'
  | 'localFile___childrenImageSharp___internal___contentDigest'
  | 'localFile___childrenImageSharp___internal___description'
  | 'localFile___childrenImageSharp___internal___fieldOwners'
  | 'localFile___childrenImageSharp___internal___ignoreType'
  | 'localFile___childrenImageSharp___internal___mediaType'
  | 'localFile___childrenImageSharp___internal___owner'
  | 'localFile___childrenImageSharp___internal___type'
  | 'localFile___childImageSharp___fixed___base64'
  | 'localFile___childImageSharp___fixed___tracedSVG'
  | 'localFile___childImageSharp___fixed___aspectRatio'
  | 'localFile___childImageSharp___fixed___width'
  | 'localFile___childImageSharp___fixed___height'
  | 'localFile___childImageSharp___fixed___src'
  | 'localFile___childImageSharp___fixed___srcSet'
  | 'localFile___childImageSharp___fixed___srcWebp'
  | 'localFile___childImageSharp___fixed___srcSetWebp'
  | 'localFile___childImageSharp___fixed___originalName'
  | 'localFile___childImageSharp___fluid___base64'
  | 'localFile___childImageSharp___fluid___tracedSVG'
  | 'localFile___childImageSharp___fluid___aspectRatio'
  | 'localFile___childImageSharp___fluid___src'
  | 'localFile___childImageSharp___fluid___srcSet'
  | 'localFile___childImageSharp___fluid___srcWebp'
  | 'localFile___childImageSharp___fluid___srcSetWebp'
  | 'localFile___childImageSharp___fluid___sizes'
  | 'localFile___childImageSharp___fluid___originalImg'
  | 'localFile___childImageSharp___fluid___originalName'
  | 'localFile___childImageSharp___fluid___presentationWidth'
  | 'localFile___childImageSharp___fluid___presentationHeight'
  | 'localFile___childImageSharp___gatsbyImageData'
  | 'localFile___childImageSharp___original___width'
  | 'localFile___childImageSharp___original___height'
  | 'localFile___childImageSharp___original___src'
  | 'localFile___childImageSharp___resize___src'
  | 'localFile___childImageSharp___resize___tracedSVG'
  | 'localFile___childImageSharp___resize___width'
  | 'localFile___childImageSharp___resize___height'
  | 'localFile___childImageSharp___resize___aspectRatio'
  | 'localFile___childImageSharp___resize___originalName'
  | 'localFile___childImageSharp___id'
  | 'localFile___childImageSharp___parent___id'
  | 'localFile___childImageSharp___parent___children'
  | 'localFile___childImageSharp___children'
  | 'localFile___childImageSharp___children___id'
  | 'localFile___childImageSharp___children___children'
  | 'localFile___childImageSharp___internal___content'
  | 'localFile___childImageSharp___internal___contentDigest'
  | 'localFile___childImageSharp___internal___description'
  | 'localFile___childImageSharp___internal___fieldOwners'
  | 'localFile___childImageSharp___internal___ignoreType'
  | 'localFile___childImageSharp___internal___mediaType'
  | 'localFile___childImageSharp___internal___owner'
  | 'localFile___childImageSharp___internal___type'
  | 'localFile___childrenCloudinaryAsset'
  | 'localFile___childrenCloudinaryAsset___fixed___aspectRatio'
  | 'localFile___childrenCloudinaryAsset___fixed___base64'
  | 'localFile___childrenCloudinaryAsset___fixed___height'
  | 'localFile___childrenCloudinaryAsset___fixed___src'
  | 'localFile___childrenCloudinaryAsset___fixed___srcSet'
  | 'localFile___childrenCloudinaryAsset___fixed___tracedSVG'
  | 'localFile___childrenCloudinaryAsset___fixed___width'
  | 'localFile___childrenCloudinaryAsset___fluid___aspectRatio'
  | 'localFile___childrenCloudinaryAsset___fluid___base64'
  | 'localFile___childrenCloudinaryAsset___fluid___presentationHeight'
  | 'localFile___childrenCloudinaryAsset___fluid___presentationWidth'
  | 'localFile___childrenCloudinaryAsset___fluid___sizes'
  | 'localFile___childrenCloudinaryAsset___fluid___src'
  | 'localFile___childrenCloudinaryAsset___fluid___srcSet'
  | 'localFile___childrenCloudinaryAsset___fluid___tracedSVG'
  | 'localFile___childrenCloudinaryAsset___id'
  | 'localFile___childrenCloudinaryAsset___parent___id'
  | 'localFile___childrenCloudinaryAsset___parent___children'
  | 'localFile___childrenCloudinaryAsset___children'
  | 'localFile___childrenCloudinaryAsset___children___id'
  | 'localFile___childrenCloudinaryAsset___children___children'
  | 'localFile___childrenCloudinaryAsset___internal___content'
  | 'localFile___childrenCloudinaryAsset___internal___contentDigest'
  | 'localFile___childrenCloudinaryAsset___internal___description'
  | 'localFile___childrenCloudinaryAsset___internal___fieldOwners'
  | 'localFile___childrenCloudinaryAsset___internal___ignoreType'
  | 'localFile___childrenCloudinaryAsset___internal___mediaType'
  | 'localFile___childrenCloudinaryAsset___internal___owner'
  | 'localFile___childrenCloudinaryAsset___internal___type'
  | 'localFile___childCloudinaryAsset___fixed___aspectRatio'
  | 'localFile___childCloudinaryAsset___fixed___base64'
  | 'localFile___childCloudinaryAsset___fixed___height'
  | 'localFile___childCloudinaryAsset___fixed___src'
  | 'localFile___childCloudinaryAsset___fixed___srcSet'
  | 'localFile___childCloudinaryAsset___fixed___tracedSVG'
  | 'localFile___childCloudinaryAsset___fixed___width'
  | 'localFile___childCloudinaryAsset___fluid___aspectRatio'
  | 'localFile___childCloudinaryAsset___fluid___base64'
  | 'localFile___childCloudinaryAsset___fluid___presentationHeight'
  | 'localFile___childCloudinaryAsset___fluid___presentationWidth'
  | 'localFile___childCloudinaryAsset___fluid___sizes'
  | 'localFile___childCloudinaryAsset___fluid___src'
  | 'localFile___childCloudinaryAsset___fluid___srcSet'
  | 'localFile___childCloudinaryAsset___fluid___tracedSVG'
  | 'localFile___childCloudinaryAsset___id'
  | 'localFile___childCloudinaryAsset___parent___id'
  | 'localFile___childCloudinaryAsset___parent___children'
  | 'localFile___childCloudinaryAsset___children'
  | 'localFile___childCloudinaryAsset___children___id'
  | 'localFile___childCloudinaryAsset___children___children'
  | 'localFile___childCloudinaryAsset___internal___content'
  | 'localFile___childCloudinaryAsset___internal___contentDigest'
  | 'localFile___childCloudinaryAsset___internal___description'
  | 'localFile___childCloudinaryAsset___internal___fieldOwners'
  | 'localFile___childCloudinaryAsset___internal___ignoreType'
  | 'localFile___childCloudinaryAsset___internal___mediaType'
  | 'localFile___childCloudinaryAsset___internal___owner'
  | 'localFile___childCloudinaryAsset___internal___type'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpMediaItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMediaItemEdge>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpMediaItemSortInput = {
  fields?: Maybe<Array<Maybe<WpMediaItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPageEdge>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpPageGroupConnection>;
};


export type WpPageConnectionDistinctArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionMaxArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionMinArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionSumArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPageFieldsEnum;
};

export type WpPageEdge = {
  next?: Maybe<WpPage>;
  node: WpPage;
  previous?: Maybe<WpPage>;
};

export type WpPageFieldsEnum =
  | 'ancestors___nodes'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___date'
  | 'ancestors___nodes___dateGmt'
  | 'ancestors___nodes___desiredSlug'
  | 'ancestors___nodes___enclosure'
  | 'ancestors___nodes___guid'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___modified'
  | 'ancestors___nodes___modifiedGmt'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___status'
  | 'ancestors___nodes___template___templateName'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'ancestors___nodes___parent___id'
  | 'ancestors___nodes___parent___children'
  | 'ancestors___nodes___children'
  | 'ancestors___nodes___children___id'
  | 'ancestors___nodes___children___children'
  | 'ancestors___nodes___internal___content'
  | 'ancestors___nodes___internal___contentDigest'
  | 'ancestors___nodes___internal___description'
  | 'ancestors___nodes___internal___fieldOwners'
  | 'ancestors___nodes___internal___ignoreType'
  | 'ancestors___nodes___internal___mediaType'
  | 'ancestors___nodes___internal___owner'
  | 'ancestors___nodes___internal___type'
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___seo___fullHead'
  | 'author___node___seo___metaDesc'
  | 'author___node___seo___metaRobotsNofollow'
  | 'author___node___seo___metaRobotsNoindex'
  | 'author___node___seo___title'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___date'
  | 'wpChildren___nodes___dateGmt'
  | 'wpChildren___nodes___desiredSlug'
  | 'wpChildren___nodes___enclosure'
  | 'wpChildren___nodes___guid'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___modified'
  | 'wpChildren___nodes___modifiedGmt'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___status'
  | 'wpChildren___nodes___template___templateName'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'wpChildren___nodes___parent___id'
  | 'wpChildren___nodes___parent___children'
  | 'wpChildren___nodes___children'
  | 'wpChildren___nodes___children___id'
  | 'wpChildren___nodes___children___children'
  | 'wpChildren___nodes___internal___content'
  | 'wpChildren___nodes___internal___contentDigest'
  | 'wpChildren___nodes___internal___description'
  | 'wpChildren___nodes___internal___fieldOwners'
  | 'wpChildren___nodes___internal___ignoreType'
  | 'wpChildren___nodes___internal___mediaType'
  | 'wpChildren___nodes___internal___owner'
  | 'wpChildren___nodes___internal___type'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'content'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'featuredImage___node___altText'
  | 'featuredImage___node___ancestors___nodes'
  | 'featuredImage___node___authorDatabaseId'
  | 'featuredImage___node___authorId'
  | 'featuredImage___node___caption'
  | 'featuredImage___node___wpChildren___nodes'
  | 'featuredImage___node___commentCount'
  | 'featuredImage___node___commentStatus'
  | 'featuredImage___node___comments___nodes'
  | 'featuredImage___node___databaseId'
  | 'featuredImage___node___date'
  | 'featuredImage___node___dateGmt'
  | 'featuredImage___node___description'
  | 'featuredImage___node___desiredSlug'
  | 'featuredImage___node___enclosure'
  | 'featuredImage___node___fileSize'
  | 'featuredImage___node___guid'
  | 'featuredImage___node___id'
  | 'featuredImage___node___link'
  | 'featuredImage___node___mediaDetails___file'
  | 'featuredImage___node___mediaDetails___height'
  | 'featuredImage___node___mediaDetails___sizes'
  | 'featuredImage___node___mediaDetails___width'
  | 'featuredImage___node___mediaItemUrl'
  | 'featuredImage___node___mediaType'
  | 'featuredImage___node___mimeType'
  | 'featuredImage___node___modified'
  | 'featuredImage___node___modifiedGmt'
  | 'featuredImage___node___parentDatabaseId'
  | 'featuredImage___node___parentId'
  | 'featuredImage___node___seo___breadcrumbs'
  | 'featuredImage___node___seo___canonical'
  | 'featuredImage___node___seo___cornerstone'
  | 'featuredImage___node___seo___focuskw'
  | 'featuredImage___node___seo___fullHead'
  | 'featuredImage___node___seo___metaDesc'
  | 'featuredImage___node___seo___metaKeywords'
  | 'featuredImage___node___seo___metaRobotsNofollow'
  | 'featuredImage___node___seo___metaRobotsNoindex'
  | 'featuredImage___node___seo___opengraphAuthor'
  | 'featuredImage___node___seo___opengraphDescription'
  | 'featuredImage___node___seo___opengraphModifiedTime'
  | 'featuredImage___node___seo___opengraphPublishedTime'
  | 'featuredImage___node___seo___opengraphPublisher'
  | 'featuredImage___node___seo___opengraphSiteName'
  | 'featuredImage___node___seo___opengraphTitle'
  | 'featuredImage___node___seo___opengraphType'
  | 'featuredImage___node___seo___opengraphUrl'
  | 'featuredImage___node___seo___readingTime'
  | 'featuredImage___node___seo___title'
  | 'featuredImage___node___seo___twitterDescription'
  | 'featuredImage___node___seo___twitterTitle'
  | 'featuredImage___node___sizes'
  | 'featuredImage___node___slug'
  | 'featuredImage___node___sourceUrl'
  | 'featuredImage___node___srcSet'
  | 'featuredImage___node___status'
  | 'featuredImage___node___template___templateName'
  | 'featuredImage___node___title'
  | 'featuredImage___node___uri'
  | 'featuredImage___node___nodeType'
  | 'featuredImage___node___remoteFile___sourceInstanceName'
  | 'featuredImage___node___remoteFile___absolutePath'
  | 'featuredImage___node___remoteFile___relativePath'
  | 'featuredImage___node___remoteFile___extension'
  | 'featuredImage___node___remoteFile___size'
  | 'featuredImage___node___remoteFile___prettySize'
  | 'featuredImage___node___remoteFile___modifiedTime'
  | 'featuredImage___node___remoteFile___accessTime'
  | 'featuredImage___node___remoteFile___changeTime'
  | 'featuredImage___node___remoteFile___birthTime'
  | 'featuredImage___node___remoteFile___root'
  | 'featuredImage___node___remoteFile___dir'
  | 'featuredImage___node___remoteFile___base'
  | 'featuredImage___node___remoteFile___ext'
  | 'featuredImage___node___remoteFile___name'
  | 'featuredImage___node___remoteFile___relativeDirectory'
  | 'featuredImage___node___remoteFile___dev'
  | 'featuredImage___node___remoteFile___mode'
  | 'featuredImage___node___remoteFile___nlink'
  | 'featuredImage___node___remoteFile___uid'
  | 'featuredImage___node___remoteFile___gid'
  | 'featuredImage___node___remoteFile___rdev'
  | 'featuredImage___node___remoteFile___ino'
  | 'featuredImage___node___remoteFile___atimeMs'
  | 'featuredImage___node___remoteFile___mtimeMs'
  | 'featuredImage___node___remoteFile___ctimeMs'
  | 'featuredImage___node___remoteFile___atime'
  | 'featuredImage___node___remoteFile___mtime'
  | 'featuredImage___node___remoteFile___ctime'
  | 'featuredImage___node___remoteFile___birthtime'
  | 'featuredImage___node___remoteFile___birthtimeMs'
  | 'featuredImage___node___remoteFile___blksize'
  | 'featuredImage___node___remoteFile___blocks'
  | 'featuredImage___node___remoteFile___publicURL'
  | 'featuredImage___node___remoteFile___childrenImageSharp'
  | 'featuredImage___node___remoteFile___childrenCloudinaryAsset'
  | 'featuredImage___node___remoteFile___id'
  | 'featuredImage___node___remoteFile___children'
  | 'featuredImage___node___localFile___sourceInstanceName'
  | 'featuredImage___node___localFile___absolutePath'
  | 'featuredImage___node___localFile___relativePath'
  | 'featuredImage___node___localFile___extension'
  | 'featuredImage___node___localFile___size'
  | 'featuredImage___node___localFile___prettySize'
  | 'featuredImage___node___localFile___modifiedTime'
  | 'featuredImage___node___localFile___accessTime'
  | 'featuredImage___node___localFile___changeTime'
  | 'featuredImage___node___localFile___birthTime'
  | 'featuredImage___node___localFile___root'
  | 'featuredImage___node___localFile___dir'
  | 'featuredImage___node___localFile___base'
  | 'featuredImage___node___localFile___ext'
  | 'featuredImage___node___localFile___name'
  | 'featuredImage___node___localFile___relativeDirectory'
  | 'featuredImage___node___localFile___dev'
  | 'featuredImage___node___localFile___mode'
  | 'featuredImage___node___localFile___nlink'
  | 'featuredImage___node___localFile___uid'
  | 'featuredImage___node___localFile___gid'
  | 'featuredImage___node___localFile___rdev'
  | 'featuredImage___node___localFile___ino'
  | 'featuredImage___node___localFile___atimeMs'
  | 'featuredImage___node___localFile___mtimeMs'
  | 'featuredImage___node___localFile___ctimeMs'
  | 'featuredImage___node___localFile___atime'
  | 'featuredImage___node___localFile___mtime'
  | 'featuredImage___node___localFile___ctime'
  | 'featuredImage___node___localFile___birthtime'
  | 'featuredImage___node___localFile___birthtimeMs'
  | 'featuredImage___node___localFile___blksize'
  | 'featuredImage___node___localFile___blocks'
  | 'featuredImage___node___localFile___publicURL'
  | 'featuredImage___node___localFile___childrenImageSharp'
  | 'featuredImage___node___localFile___childrenCloudinaryAsset'
  | 'featuredImage___node___localFile___id'
  | 'featuredImage___node___localFile___children'
  | 'featuredImage___node___parent___id'
  | 'featuredImage___node___parent___children'
  | 'featuredImage___node___children'
  | 'featuredImage___node___children___id'
  | 'featuredImage___node___children___children'
  | 'featuredImage___node___internal___content'
  | 'featuredImage___node___internal___contentDigest'
  | 'featuredImage___node___internal___description'
  | 'featuredImage___node___internal___fieldOwners'
  | 'featuredImage___node___internal___ignoreType'
  | 'featuredImage___node___internal___mediaType'
  | 'featuredImage___node___internal___owner'
  | 'featuredImage___node___internal___type'
  | 'featuredImageDatabaseId'
  | 'featuredImageId'
  | 'guid'
  | 'id'
  | 'isFrontPage'
  | 'isPostsPage'
  | 'isPrivacyPage'
  | 'isRevision'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___seo___fullHead'
  | 'lastEditedBy___node___seo___metaDesc'
  | 'lastEditedBy___node___seo___metaRobotsNofollow'
  | 'lastEditedBy___node___seo___metaRobotsNoindex'
  | 'lastEditedBy___node___seo___title'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'menuOrder'
  | 'modified'
  | 'modifiedGmt'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___desiredSlug'
  | 'wpParent___node___enclosure'
  | 'wpParent___node___guid'
  | 'wpParent___node___id'
  | 'wpParent___node___link'
  | 'wpParent___node___modified'
  | 'wpParent___node___modifiedGmt'
  | 'wpParent___node___slug'
  | 'wpParent___node___status'
  | 'wpParent___node___template___templateName'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'seo___breadcrumbs'
  | 'seo___breadcrumbs___text'
  | 'seo___breadcrumbs___url'
  | 'seo___canonical'
  | 'seo___cornerstone'
  | 'seo___focuskw'
  | 'seo___fullHead'
  | 'seo___metaDesc'
  | 'seo___metaKeywords'
  | 'seo___metaRobotsNofollow'
  | 'seo___metaRobotsNoindex'
  | 'seo___opengraphAuthor'
  | 'seo___opengraphDescription'
  | 'seo___opengraphImage___altText'
  | 'seo___opengraphImage___ancestors___nodes'
  | 'seo___opengraphImage___authorDatabaseId'
  | 'seo___opengraphImage___authorId'
  | 'seo___opengraphImage___caption'
  | 'seo___opengraphImage___wpChildren___nodes'
  | 'seo___opengraphImage___commentCount'
  | 'seo___opengraphImage___commentStatus'
  | 'seo___opengraphImage___comments___nodes'
  | 'seo___opengraphImage___databaseId'
  | 'seo___opengraphImage___date'
  | 'seo___opengraphImage___dateGmt'
  | 'seo___opengraphImage___description'
  | 'seo___opengraphImage___desiredSlug'
  | 'seo___opengraphImage___enclosure'
  | 'seo___opengraphImage___fileSize'
  | 'seo___opengraphImage___guid'
  | 'seo___opengraphImage___id'
  | 'seo___opengraphImage___link'
  | 'seo___opengraphImage___mediaDetails___file'
  | 'seo___opengraphImage___mediaDetails___height'
  | 'seo___opengraphImage___mediaDetails___sizes'
  | 'seo___opengraphImage___mediaDetails___width'
  | 'seo___opengraphImage___mediaItemUrl'
  | 'seo___opengraphImage___mediaType'
  | 'seo___opengraphImage___mimeType'
  | 'seo___opengraphImage___modified'
  | 'seo___opengraphImage___modifiedGmt'
  | 'seo___opengraphImage___parentDatabaseId'
  | 'seo___opengraphImage___parentId'
  | 'seo___opengraphImage___seo___breadcrumbs'
  | 'seo___opengraphImage___seo___canonical'
  | 'seo___opengraphImage___seo___cornerstone'
  | 'seo___opengraphImage___seo___focuskw'
  | 'seo___opengraphImage___seo___fullHead'
  | 'seo___opengraphImage___seo___metaDesc'
  | 'seo___opengraphImage___seo___metaKeywords'
  | 'seo___opengraphImage___seo___metaRobotsNofollow'
  | 'seo___opengraphImage___seo___metaRobotsNoindex'
  | 'seo___opengraphImage___seo___opengraphAuthor'
  | 'seo___opengraphImage___seo___opengraphDescription'
  | 'seo___opengraphImage___seo___opengraphModifiedTime'
  | 'seo___opengraphImage___seo___opengraphPublishedTime'
  | 'seo___opengraphImage___seo___opengraphPublisher'
  | 'seo___opengraphImage___seo___opengraphSiteName'
  | 'seo___opengraphImage___seo___opengraphTitle'
  | 'seo___opengraphImage___seo___opengraphType'
  | 'seo___opengraphImage___seo___opengraphUrl'
  | 'seo___opengraphImage___seo___readingTime'
  | 'seo___opengraphImage___seo___title'
  | 'seo___opengraphImage___seo___twitterDescription'
  | 'seo___opengraphImage___seo___twitterTitle'
  | 'seo___opengraphImage___sizes'
  | 'seo___opengraphImage___slug'
  | 'seo___opengraphImage___sourceUrl'
  | 'seo___opengraphImage___srcSet'
  | 'seo___opengraphImage___status'
  | 'seo___opengraphImage___template___templateName'
  | 'seo___opengraphImage___title'
  | 'seo___opengraphImage___uri'
  | 'seo___opengraphImage___nodeType'
  | 'seo___opengraphImage___remoteFile___sourceInstanceName'
  | 'seo___opengraphImage___remoteFile___absolutePath'
  | 'seo___opengraphImage___remoteFile___relativePath'
  | 'seo___opengraphImage___remoteFile___extension'
  | 'seo___opengraphImage___remoteFile___size'
  | 'seo___opengraphImage___remoteFile___prettySize'
  | 'seo___opengraphImage___remoteFile___modifiedTime'
  | 'seo___opengraphImage___remoteFile___accessTime'
  | 'seo___opengraphImage___remoteFile___changeTime'
  | 'seo___opengraphImage___remoteFile___birthTime'
  | 'seo___opengraphImage___remoteFile___root'
  | 'seo___opengraphImage___remoteFile___dir'
  | 'seo___opengraphImage___remoteFile___base'
  | 'seo___opengraphImage___remoteFile___ext'
  | 'seo___opengraphImage___remoteFile___name'
  | 'seo___opengraphImage___remoteFile___relativeDirectory'
  | 'seo___opengraphImage___remoteFile___dev'
  | 'seo___opengraphImage___remoteFile___mode'
  | 'seo___opengraphImage___remoteFile___nlink'
  | 'seo___opengraphImage___remoteFile___uid'
  | 'seo___opengraphImage___remoteFile___gid'
  | 'seo___opengraphImage___remoteFile___rdev'
  | 'seo___opengraphImage___remoteFile___ino'
  | 'seo___opengraphImage___remoteFile___atimeMs'
  | 'seo___opengraphImage___remoteFile___mtimeMs'
  | 'seo___opengraphImage___remoteFile___ctimeMs'
  | 'seo___opengraphImage___remoteFile___atime'
  | 'seo___opengraphImage___remoteFile___mtime'
  | 'seo___opengraphImage___remoteFile___ctime'
  | 'seo___opengraphImage___remoteFile___birthtime'
  | 'seo___opengraphImage___remoteFile___birthtimeMs'
  | 'seo___opengraphImage___remoteFile___blksize'
  | 'seo___opengraphImage___remoteFile___blocks'
  | 'seo___opengraphImage___remoteFile___publicURL'
  | 'seo___opengraphImage___remoteFile___childrenImageSharp'
  | 'seo___opengraphImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___remoteFile___id'
  | 'seo___opengraphImage___remoteFile___children'
  | 'seo___opengraphImage___localFile___sourceInstanceName'
  | 'seo___opengraphImage___localFile___absolutePath'
  | 'seo___opengraphImage___localFile___relativePath'
  | 'seo___opengraphImage___localFile___extension'
  | 'seo___opengraphImage___localFile___size'
  | 'seo___opengraphImage___localFile___prettySize'
  | 'seo___opengraphImage___localFile___modifiedTime'
  | 'seo___opengraphImage___localFile___accessTime'
  | 'seo___opengraphImage___localFile___changeTime'
  | 'seo___opengraphImage___localFile___birthTime'
  | 'seo___opengraphImage___localFile___root'
  | 'seo___opengraphImage___localFile___dir'
  | 'seo___opengraphImage___localFile___base'
  | 'seo___opengraphImage___localFile___ext'
  | 'seo___opengraphImage___localFile___name'
  | 'seo___opengraphImage___localFile___relativeDirectory'
  | 'seo___opengraphImage___localFile___dev'
  | 'seo___opengraphImage___localFile___mode'
  | 'seo___opengraphImage___localFile___nlink'
  | 'seo___opengraphImage___localFile___uid'
  | 'seo___opengraphImage___localFile___gid'
  | 'seo___opengraphImage___localFile___rdev'
  | 'seo___opengraphImage___localFile___ino'
  | 'seo___opengraphImage___localFile___atimeMs'
  | 'seo___opengraphImage___localFile___mtimeMs'
  | 'seo___opengraphImage___localFile___ctimeMs'
  | 'seo___opengraphImage___localFile___atime'
  | 'seo___opengraphImage___localFile___mtime'
  | 'seo___opengraphImage___localFile___ctime'
  | 'seo___opengraphImage___localFile___birthtime'
  | 'seo___opengraphImage___localFile___birthtimeMs'
  | 'seo___opengraphImage___localFile___blksize'
  | 'seo___opengraphImage___localFile___blocks'
  | 'seo___opengraphImage___localFile___publicURL'
  | 'seo___opengraphImage___localFile___childrenImageSharp'
  | 'seo___opengraphImage___localFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___localFile___id'
  | 'seo___opengraphImage___localFile___children'
  | 'seo___opengraphImage___parent___id'
  | 'seo___opengraphImage___parent___children'
  | 'seo___opengraphImage___children'
  | 'seo___opengraphImage___children___id'
  | 'seo___opengraphImage___children___children'
  | 'seo___opengraphImage___internal___content'
  | 'seo___opengraphImage___internal___contentDigest'
  | 'seo___opengraphImage___internal___description'
  | 'seo___opengraphImage___internal___fieldOwners'
  | 'seo___opengraphImage___internal___ignoreType'
  | 'seo___opengraphImage___internal___mediaType'
  | 'seo___opengraphImage___internal___owner'
  | 'seo___opengraphImage___internal___type'
  | 'seo___opengraphModifiedTime'
  | 'seo___opengraphPublishedTime'
  | 'seo___opengraphPublisher'
  | 'seo___opengraphSiteName'
  | 'seo___opengraphTitle'
  | 'seo___opengraphType'
  | 'seo___opengraphUrl'
  | 'seo___readingTime'
  | 'seo___schema___articleType'
  | 'seo___schema___pageType'
  | 'seo___schema___raw'
  | 'seo___title'
  | 'seo___twitterDescription'
  | 'seo___twitterImage___altText'
  | 'seo___twitterImage___ancestors___nodes'
  | 'seo___twitterImage___authorDatabaseId'
  | 'seo___twitterImage___authorId'
  | 'seo___twitterImage___caption'
  | 'seo___twitterImage___wpChildren___nodes'
  | 'seo___twitterImage___commentCount'
  | 'seo___twitterImage___commentStatus'
  | 'seo___twitterImage___comments___nodes'
  | 'seo___twitterImage___databaseId'
  | 'seo___twitterImage___date'
  | 'seo___twitterImage___dateGmt'
  | 'seo___twitterImage___description'
  | 'seo___twitterImage___desiredSlug'
  | 'seo___twitterImage___enclosure'
  | 'seo___twitterImage___fileSize'
  | 'seo___twitterImage___guid'
  | 'seo___twitterImage___id'
  | 'seo___twitterImage___link'
  | 'seo___twitterImage___mediaDetails___file'
  | 'seo___twitterImage___mediaDetails___height'
  | 'seo___twitterImage___mediaDetails___sizes'
  | 'seo___twitterImage___mediaDetails___width'
  | 'seo___twitterImage___mediaItemUrl'
  | 'seo___twitterImage___mediaType'
  | 'seo___twitterImage___mimeType'
  | 'seo___twitterImage___modified'
  | 'seo___twitterImage___modifiedGmt'
  | 'seo___twitterImage___parentDatabaseId'
  | 'seo___twitterImage___parentId'
  | 'seo___twitterImage___seo___breadcrumbs'
  | 'seo___twitterImage___seo___canonical'
  | 'seo___twitterImage___seo___cornerstone'
  | 'seo___twitterImage___seo___focuskw'
  | 'seo___twitterImage___seo___fullHead'
  | 'seo___twitterImage___seo___metaDesc'
  | 'seo___twitterImage___seo___metaKeywords'
  | 'seo___twitterImage___seo___metaRobotsNofollow'
  | 'seo___twitterImage___seo___metaRobotsNoindex'
  | 'seo___twitterImage___seo___opengraphAuthor'
  | 'seo___twitterImage___seo___opengraphDescription'
  | 'seo___twitterImage___seo___opengraphModifiedTime'
  | 'seo___twitterImage___seo___opengraphPublishedTime'
  | 'seo___twitterImage___seo___opengraphPublisher'
  | 'seo___twitterImage___seo___opengraphSiteName'
  | 'seo___twitterImage___seo___opengraphTitle'
  | 'seo___twitterImage___seo___opengraphType'
  | 'seo___twitterImage___seo___opengraphUrl'
  | 'seo___twitterImage___seo___readingTime'
  | 'seo___twitterImage___seo___title'
  | 'seo___twitterImage___seo___twitterDescription'
  | 'seo___twitterImage___seo___twitterTitle'
  | 'seo___twitterImage___sizes'
  | 'seo___twitterImage___slug'
  | 'seo___twitterImage___sourceUrl'
  | 'seo___twitterImage___srcSet'
  | 'seo___twitterImage___status'
  | 'seo___twitterImage___template___templateName'
  | 'seo___twitterImage___title'
  | 'seo___twitterImage___uri'
  | 'seo___twitterImage___nodeType'
  | 'seo___twitterImage___remoteFile___sourceInstanceName'
  | 'seo___twitterImage___remoteFile___absolutePath'
  | 'seo___twitterImage___remoteFile___relativePath'
  | 'seo___twitterImage___remoteFile___extension'
  | 'seo___twitterImage___remoteFile___size'
  | 'seo___twitterImage___remoteFile___prettySize'
  | 'seo___twitterImage___remoteFile___modifiedTime'
  | 'seo___twitterImage___remoteFile___accessTime'
  | 'seo___twitterImage___remoteFile___changeTime'
  | 'seo___twitterImage___remoteFile___birthTime'
  | 'seo___twitterImage___remoteFile___root'
  | 'seo___twitterImage___remoteFile___dir'
  | 'seo___twitterImage___remoteFile___base'
  | 'seo___twitterImage___remoteFile___ext'
  | 'seo___twitterImage___remoteFile___name'
  | 'seo___twitterImage___remoteFile___relativeDirectory'
  | 'seo___twitterImage___remoteFile___dev'
  | 'seo___twitterImage___remoteFile___mode'
  | 'seo___twitterImage___remoteFile___nlink'
  | 'seo___twitterImage___remoteFile___uid'
  | 'seo___twitterImage___remoteFile___gid'
  | 'seo___twitterImage___remoteFile___rdev'
  | 'seo___twitterImage___remoteFile___ino'
  | 'seo___twitterImage___remoteFile___atimeMs'
  | 'seo___twitterImage___remoteFile___mtimeMs'
  | 'seo___twitterImage___remoteFile___ctimeMs'
  | 'seo___twitterImage___remoteFile___atime'
  | 'seo___twitterImage___remoteFile___mtime'
  | 'seo___twitterImage___remoteFile___ctime'
  | 'seo___twitterImage___remoteFile___birthtime'
  | 'seo___twitterImage___remoteFile___birthtimeMs'
  | 'seo___twitterImage___remoteFile___blksize'
  | 'seo___twitterImage___remoteFile___blocks'
  | 'seo___twitterImage___remoteFile___publicURL'
  | 'seo___twitterImage___remoteFile___childrenImageSharp'
  | 'seo___twitterImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___remoteFile___id'
  | 'seo___twitterImage___remoteFile___children'
  | 'seo___twitterImage___localFile___sourceInstanceName'
  | 'seo___twitterImage___localFile___absolutePath'
  | 'seo___twitterImage___localFile___relativePath'
  | 'seo___twitterImage___localFile___extension'
  | 'seo___twitterImage___localFile___size'
  | 'seo___twitterImage___localFile___prettySize'
  | 'seo___twitterImage___localFile___modifiedTime'
  | 'seo___twitterImage___localFile___accessTime'
  | 'seo___twitterImage___localFile___changeTime'
  | 'seo___twitterImage___localFile___birthTime'
  | 'seo___twitterImage___localFile___root'
  | 'seo___twitterImage___localFile___dir'
  | 'seo___twitterImage___localFile___base'
  | 'seo___twitterImage___localFile___ext'
  | 'seo___twitterImage___localFile___name'
  | 'seo___twitterImage___localFile___relativeDirectory'
  | 'seo___twitterImage___localFile___dev'
  | 'seo___twitterImage___localFile___mode'
  | 'seo___twitterImage___localFile___nlink'
  | 'seo___twitterImage___localFile___uid'
  | 'seo___twitterImage___localFile___gid'
  | 'seo___twitterImage___localFile___rdev'
  | 'seo___twitterImage___localFile___ino'
  | 'seo___twitterImage___localFile___atimeMs'
  | 'seo___twitterImage___localFile___mtimeMs'
  | 'seo___twitterImage___localFile___ctimeMs'
  | 'seo___twitterImage___localFile___atime'
  | 'seo___twitterImage___localFile___mtime'
  | 'seo___twitterImage___localFile___ctime'
  | 'seo___twitterImage___localFile___birthtime'
  | 'seo___twitterImage___localFile___birthtimeMs'
  | 'seo___twitterImage___localFile___blksize'
  | 'seo___twitterImage___localFile___blocks'
  | 'seo___twitterImage___localFile___publicURL'
  | 'seo___twitterImage___localFile___childrenImageSharp'
  | 'seo___twitterImage___localFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___localFile___id'
  | 'seo___twitterImage___localFile___children'
  | 'seo___twitterImage___parent___id'
  | 'seo___twitterImage___parent___children'
  | 'seo___twitterImage___children'
  | 'seo___twitterImage___children___id'
  | 'seo___twitterImage___children___children'
  | 'seo___twitterImage___internal___content'
  | 'seo___twitterImage___internal___contentDigest'
  | 'seo___twitterImage___internal___description'
  | 'seo___twitterImage___internal___fieldOwners'
  | 'seo___twitterImage___internal___ignoreType'
  | 'seo___twitterImage___internal___mediaType'
  | 'seo___twitterImage___internal___owner'
  | 'seo___twitterImage___internal___type'
  | 'seo___twitterTitle'
  | 'slug'
  | 'status'
  | 'template___templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPageEdge>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPageSortInput = {
  fields?: Maybe<Array<Maybe<WpPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostEdge>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpPostGroupConnection>;
};


export type WpPostConnectionDistinctArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionMaxArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionMinArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionSumArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPostFieldsEnum;
};

export type WpPostEdge = {
  next?: Maybe<WpPost>;
  node: WpPost;
  previous?: Maybe<WpPost>;
};

export type WpPostFieldsEnum =
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___seo___fullHead'
  | 'author___node___seo___metaDesc'
  | 'author___node___seo___metaRobotsNofollow'
  | 'author___node___seo___metaRobotsNoindex'
  | 'author___node___seo___title'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'categories___nodes'
  | 'categories___nodes___ancestors___nodes'
  | 'categories___nodes___wpChildren___nodes'
  | 'categories___nodes___contentNodes___nodes'
  | 'categories___nodes___count'
  | 'categories___nodes___databaseId'
  | 'categories___nodes___description'
  | 'categories___nodes___id'
  | 'categories___nodes___link'
  | 'categories___nodes___name'
  | 'categories___nodes___parentDatabaseId'
  | 'categories___nodes___parentId'
  | 'categories___nodes___posts___nodes'
  | 'categories___nodes___seo___breadcrumbs'
  | 'categories___nodes___seo___canonical'
  | 'categories___nodes___seo___cornerstone'
  | 'categories___nodes___seo___focuskw'
  | 'categories___nodes___seo___fullHead'
  | 'categories___nodes___seo___metaDesc'
  | 'categories___nodes___seo___metaKeywords'
  | 'categories___nodes___seo___metaRobotsNofollow'
  | 'categories___nodes___seo___metaRobotsNoindex'
  | 'categories___nodes___seo___opengraphAuthor'
  | 'categories___nodes___seo___opengraphDescription'
  | 'categories___nodes___seo___opengraphModifiedTime'
  | 'categories___nodes___seo___opengraphPublishedTime'
  | 'categories___nodes___seo___opengraphPublisher'
  | 'categories___nodes___seo___opengraphSiteName'
  | 'categories___nodes___seo___opengraphTitle'
  | 'categories___nodes___seo___opengraphType'
  | 'categories___nodes___seo___opengraphUrl'
  | 'categories___nodes___seo___title'
  | 'categories___nodes___seo___twitterDescription'
  | 'categories___nodes___seo___twitterTitle'
  | 'categories___nodes___slug'
  | 'categories___nodes___termGroupId'
  | 'categories___nodes___termTaxonomyId'
  | 'categories___nodes___uri'
  | 'categories___nodes___nodeType'
  | 'categories___nodes___parent___id'
  | 'categories___nodes___parent___children'
  | 'categories___nodes___children'
  | 'categories___nodes___children___id'
  | 'categories___nodes___children___children'
  | 'categories___nodes___internal___content'
  | 'categories___nodes___internal___contentDigest'
  | 'categories___nodes___internal___description'
  | 'categories___nodes___internal___fieldOwners'
  | 'categories___nodes___internal___ignoreType'
  | 'categories___nodes___internal___mediaType'
  | 'categories___nodes___internal___owner'
  | 'categories___nodes___internal___type'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'content'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'excerpt'
  | 'featuredImage___node___altText'
  | 'featuredImage___node___ancestors___nodes'
  | 'featuredImage___node___authorDatabaseId'
  | 'featuredImage___node___authorId'
  | 'featuredImage___node___caption'
  | 'featuredImage___node___wpChildren___nodes'
  | 'featuredImage___node___commentCount'
  | 'featuredImage___node___commentStatus'
  | 'featuredImage___node___comments___nodes'
  | 'featuredImage___node___databaseId'
  | 'featuredImage___node___date'
  | 'featuredImage___node___dateGmt'
  | 'featuredImage___node___description'
  | 'featuredImage___node___desiredSlug'
  | 'featuredImage___node___enclosure'
  | 'featuredImage___node___fileSize'
  | 'featuredImage___node___guid'
  | 'featuredImage___node___id'
  | 'featuredImage___node___link'
  | 'featuredImage___node___mediaDetails___file'
  | 'featuredImage___node___mediaDetails___height'
  | 'featuredImage___node___mediaDetails___sizes'
  | 'featuredImage___node___mediaDetails___width'
  | 'featuredImage___node___mediaItemUrl'
  | 'featuredImage___node___mediaType'
  | 'featuredImage___node___mimeType'
  | 'featuredImage___node___modified'
  | 'featuredImage___node___modifiedGmt'
  | 'featuredImage___node___parentDatabaseId'
  | 'featuredImage___node___parentId'
  | 'featuredImage___node___seo___breadcrumbs'
  | 'featuredImage___node___seo___canonical'
  | 'featuredImage___node___seo___cornerstone'
  | 'featuredImage___node___seo___focuskw'
  | 'featuredImage___node___seo___fullHead'
  | 'featuredImage___node___seo___metaDesc'
  | 'featuredImage___node___seo___metaKeywords'
  | 'featuredImage___node___seo___metaRobotsNofollow'
  | 'featuredImage___node___seo___metaRobotsNoindex'
  | 'featuredImage___node___seo___opengraphAuthor'
  | 'featuredImage___node___seo___opengraphDescription'
  | 'featuredImage___node___seo___opengraphModifiedTime'
  | 'featuredImage___node___seo___opengraphPublishedTime'
  | 'featuredImage___node___seo___opengraphPublisher'
  | 'featuredImage___node___seo___opengraphSiteName'
  | 'featuredImage___node___seo___opengraphTitle'
  | 'featuredImage___node___seo___opengraphType'
  | 'featuredImage___node___seo___opengraphUrl'
  | 'featuredImage___node___seo___readingTime'
  | 'featuredImage___node___seo___title'
  | 'featuredImage___node___seo___twitterDescription'
  | 'featuredImage___node___seo___twitterTitle'
  | 'featuredImage___node___sizes'
  | 'featuredImage___node___slug'
  | 'featuredImage___node___sourceUrl'
  | 'featuredImage___node___srcSet'
  | 'featuredImage___node___status'
  | 'featuredImage___node___template___templateName'
  | 'featuredImage___node___title'
  | 'featuredImage___node___uri'
  | 'featuredImage___node___nodeType'
  | 'featuredImage___node___remoteFile___sourceInstanceName'
  | 'featuredImage___node___remoteFile___absolutePath'
  | 'featuredImage___node___remoteFile___relativePath'
  | 'featuredImage___node___remoteFile___extension'
  | 'featuredImage___node___remoteFile___size'
  | 'featuredImage___node___remoteFile___prettySize'
  | 'featuredImage___node___remoteFile___modifiedTime'
  | 'featuredImage___node___remoteFile___accessTime'
  | 'featuredImage___node___remoteFile___changeTime'
  | 'featuredImage___node___remoteFile___birthTime'
  | 'featuredImage___node___remoteFile___root'
  | 'featuredImage___node___remoteFile___dir'
  | 'featuredImage___node___remoteFile___base'
  | 'featuredImage___node___remoteFile___ext'
  | 'featuredImage___node___remoteFile___name'
  | 'featuredImage___node___remoteFile___relativeDirectory'
  | 'featuredImage___node___remoteFile___dev'
  | 'featuredImage___node___remoteFile___mode'
  | 'featuredImage___node___remoteFile___nlink'
  | 'featuredImage___node___remoteFile___uid'
  | 'featuredImage___node___remoteFile___gid'
  | 'featuredImage___node___remoteFile___rdev'
  | 'featuredImage___node___remoteFile___ino'
  | 'featuredImage___node___remoteFile___atimeMs'
  | 'featuredImage___node___remoteFile___mtimeMs'
  | 'featuredImage___node___remoteFile___ctimeMs'
  | 'featuredImage___node___remoteFile___atime'
  | 'featuredImage___node___remoteFile___mtime'
  | 'featuredImage___node___remoteFile___ctime'
  | 'featuredImage___node___remoteFile___birthtime'
  | 'featuredImage___node___remoteFile___birthtimeMs'
  | 'featuredImage___node___remoteFile___blksize'
  | 'featuredImage___node___remoteFile___blocks'
  | 'featuredImage___node___remoteFile___publicURL'
  | 'featuredImage___node___remoteFile___childrenImageSharp'
  | 'featuredImage___node___remoteFile___childrenCloudinaryAsset'
  | 'featuredImage___node___remoteFile___id'
  | 'featuredImage___node___remoteFile___children'
  | 'featuredImage___node___localFile___sourceInstanceName'
  | 'featuredImage___node___localFile___absolutePath'
  | 'featuredImage___node___localFile___relativePath'
  | 'featuredImage___node___localFile___extension'
  | 'featuredImage___node___localFile___size'
  | 'featuredImage___node___localFile___prettySize'
  | 'featuredImage___node___localFile___modifiedTime'
  | 'featuredImage___node___localFile___accessTime'
  | 'featuredImage___node___localFile___changeTime'
  | 'featuredImage___node___localFile___birthTime'
  | 'featuredImage___node___localFile___root'
  | 'featuredImage___node___localFile___dir'
  | 'featuredImage___node___localFile___base'
  | 'featuredImage___node___localFile___ext'
  | 'featuredImage___node___localFile___name'
  | 'featuredImage___node___localFile___relativeDirectory'
  | 'featuredImage___node___localFile___dev'
  | 'featuredImage___node___localFile___mode'
  | 'featuredImage___node___localFile___nlink'
  | 'featuredImage___node___localFile___uid'
  | 'featuredImage___node___localFile___gid'
  | 'featuredImage___node___localFile___rdev'
  | 'featuredImage___node___localFile___ino'
  | 'featuredImage___node___localFile___atimeMs'
  | 'featuredImage___node___localFile___mtimeMs'
  | 'featuredImage___node___localFile___ctimeMs'
  | 'featuredImage___node___localFile___atime'
  | 'featuredImage___node___localFile___mtime'
  | 'featuredImage___node___localFile___ctime'
  | 'featuredImage___node___localFile___birthtime'
  | 'featuredImage___node___localFile___birthtimeMs'
  | 'featuredImage___node___localFile___blksize'
  | 'featuredImage___node___localFile___blocks'
  | 'featuredImage___node___localFile___publicURL'
  | 'featuredImage___node___localFile___childrenImageSharp'
  | 'featuredImage___node___localFile___childrenCloudinaryAsset'
  | 'featuredImage___node___localFile___id'
  | 'featuredImage___node___localFile___children'
  | 'featuredImage___node___parent___id'
  | 'featuredImage___node___parent___children'
  | 'featuredImage___node___children'
  | 'featuredImage___node___children___id'
  | 'featuredImage___node___children___children'
  | 'featuredImage___node___internal___content'
  | 'featuredImage___node___internal___contentDigest'
  | 'featuredImage___node___internal___description'
  | 'featuredImage___node___internal___fieldOwners'
  | 'featuredImage___node___internal___ignoreType'
  | 'featuredImage___node___internal___mediaType'
  | 'featuredImage___node___internal___owner'
  | 'featuredImage___node___internal___type'
  | 'featuredImageDatabaseId'
  | 'featuredImageId'
  | 'guid'
  | 'id'
  | 'isRevision'
  | 'isSticky'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___seo___fullHead'
  | 'lastEditedBy___node___seo___metaDesc'
  | 'lastEditedBy___node___seo___metaRobotsNofollow'
  | 'lastEditedBy___node___seo___metaRobotsNoindex'
  | 'lastEditedBy___node___seo___title'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'pingStatus'
  | 'pinged'
  | 'postFormats___nodes'
  | 'postFormats___nodes___contentNodes___nodes'
  | 'postFormats___nodes___count'
  | 'postFormats___nodes___databaseId'
  | 'postFormats___nodes___description'
  | 'postFormats___nodes___id'
  | 'postFormats___nodes___link'
  | 'postFormats___nodes___name'
  | 'postFormats___nodes___posts___nodes'
  | 'postFormats___nodes___seo___breadcrumbs'
  | 'postFormats___nodes___seo___canonical'
  | 'postFormats___nodes___seo___cornerstone'
  | 'postFormats___nodes___seo___focuskw'
  | 'postFormats___nodes___seo___fullHead'
  | 'postFormats___nodes___seo___metaDesc'
  | 'postFormats___nodes___seo___metaKeywords'
  | 'postFormats___nodes___seo___metaRobotsNofollow'
  | 'postFormats___nodes___seo___metaRobotsNoindex'
  | 'postFormats___nodes___seo___opengraphAuthor'
  | 'postFormats___nodes___seo___opengraphDescription'
  | 'postFormats___nodes___seo___opengraphModifiedTime'
  | 'postFormats___nodes___seo___opengraphPublishedTime'
  | 'postFormats___nodes___seo___opengraphPublisher'
  | 'postFormats___nodes___seo___opengraphSiteName'
  | 'postFormats___nodes___seo___opengraphTitle'
  | 'postFormats___nodes___seo___opengraphType'
  | 'postFormats___nodes___seo___opengraphUrl'
  | 'postFormats___nodes___seo___title'
  | 'postFormats___nodes___seo___twitterDescription'
  | 'postFormats___nodes___seo___twitterTitle'
  | 'postFormats___nodes___slug'
  | 'postFormats___nodes___termGroupId'
  | 'postFormats___nodes___termTaxonomyId'
  | 'postFormats___nodes___uri'
  | 'postFormats___nodes___nodeType'
  | 'postFormats___nodes___parent___id'
  | 'postFormats___nodes___parent___children'
  | 'postFormats___nodes___children'
  | 'postFormats___nodes___children___id'
  | 'postFormats___nodes___children___children'
  | 'postFormats___nodes___internal___content'
  | 'postFormats___nodes___internal___contentDigest'
  | 'postFormats___nodes___internal___description'
  | 'postFormats___nodes___internal___fieldOwners'
  | 'postFormats___nodes___internal___ignoreType'
  | 'postFormats___nodes___internal___mediaType'
  | 'postFormats___nodes___internal___owner'
  | 'postFormats___nodes___internal___type'
  | 'seo___breadcrumbs'
  | 'seo___breadcrumbs___text'
  | 'seo___breadcrumbs___url'
  | 'seo___canonical'
  | 'seo___cornerstone'
  | 'seo___focuskw'
  | 'seo___fullHead'
  | 'seo___metaDesc'
  | 'seo___metaKeywords'
  | 'seo___metaRobotsNofollow'
  | 'seo___metaRobotsNoindex'
  | 'seo___opengraphAuthor'
  | 'seo___opengraphDescription'
  | 'seo___opengraphImage___altText'
  | 'seo___opengraphImage___ancestors___nodes'
  | 'seo___opengraphImage___authorDatabaseId'
  | 'seo___opengraphImage___authorId'
  | 'seo___opengraphImage___caption'
  | 'seo___opengraphImage___wpChildren___nodes'
  | 'seo___opengraphImage___commentCount'
  | 'seo___opengraphImage___commentStatus'
  | 'seo___opengraphImage___comments___nodes'
  | 'seo___opengraphImage___databaseId'
  | 'seo___opengraphImage___date'
  | 'seo___opengraphImage___dateGmt'
  | 'seo___opengraphImage___description'
  | 'seo___opengraphImage___desiredSlug'
  | 'seo___opengraphImage___enclosure'
  | 'seo___opengraphImage___fileSize'
  | 'seo___opengraphImage___guid'
  | 'seo___opengraphImage___id'
  | 'seo___opengraphImage___link'
  | 'seo___opengraphImage___mediaDetails___file'
  | 'seo___opengraphImage___mediaDetails___height'
  | 'seo___opengraphImage___mediaDetails___sizes'
  | 'seo___opengraphImage___mediaDetails___width'
  | 'seo___opengraphImage___mediaItemUrl'
  | 'seo___opengraphImage___mediaType'
  | 'seo___opengraphImage___mimeType'
  | 'seo___opengraphImage___modified'
  | 'seo___opengraphImage___modifiedGmt'
  | 'seo___opengraphImage___parentDatabaseId'
  | 'seo___opengraphImage___parentId'
  | 'seo___opengraphImage___seo___breadcrumbs'
  | 'seo___opengraphImage___seo___canonical'
  | 'seo___opengraphImage___seo___cornerstone'
  | 'seo___opengraphImage___seo___focuskw'
  | 'seo___opengraphImage___seo___fullHead'
  | 'seo___opengraphImage___seo___metaDesc'
  | 'seo___opengraphImage___seo___metaKeywords'
  | 'seo___opengraphImage___seo___metaRobotsNofollow'
  | 'seo___opengraphImage___seo___metaRobotsNoindex'
  | 'seo___opengraphImage___seo___opengraphAuthor'
  | 'seo___opengraphImage___seo___opengraphDescription'
  | 'seo___opengraphImage___seo___opengraphModifiedTime'
  | 'seo___opengraphImage___seo___opengraphPublishedTime'
  | 'seo___opengraphImage___seo___opengraphPublisher'
  | 'seo___opengraphImage___seo___opengraphSiteName'
  | 'seo___opengraphImage___seo___opengraphTitle'
  | 'seo___opengraphImage___seo___opengraphType'
  | 'seo___opengraphImage___seo___opengraphUrl'
  | 'seo___opengraphImage___seo___readingTime'
  | 'seo___opengraphImage___seo___title'
  | 'seo___opengraphImage___seo___twitterDescription'
  | 'seo___opengraphImage___seo___twitterTitle'
  | 'seo___opengraphImage___sizes'
  | 'seo___opengraphImage___slug'
  | 'seo___opengraphImage___sourceUrl'
  | 'seo___opengraphImage___srcSet'
  | 'seo___opengraphImage___status'
  | 'seo___opengraphImage___template___templateName'
  | 'seo___opengraphImage___title'
  | 'seo___opengraphImage___uri'
  | 'seo___opengraphImage___nodeType'
  | 'seo___opengraphImage___remoteFile___sourceInstanceName'
  | 'seo___opengraphImage___remoteFile___absolutePath'
  | 'seo___opengraphImage___remoteFile___relativePath'
  | 'seo___opengraphImage___remoteFile___extension'
  | 'seo___opengraphImage___remoteFile___size'
  | 'seo___opengraphImage___remoteFile___prettySize'
  | 'seo___opengraphImage___remoteFile___modifiedTime'
  | 'seo___opengraphImage___remoteFile___accessTime'
  | 'seo___opengraphImage___remoteFile___changeTime'
  | 'seo___opengraphImage___remoteFile___birthTime'
  | 'seo___opengraphImage___remoteFile___root'
  | 'seo___opengraphImage___remoteFile___dir'
  | 'seo___opengraphImage___remoteFile___base'
  | 'seo___opengraphImage___remoteFile___ext'
  | 'seo___opengraphImage___remoteFile___name'
  | 'seo___opengraphImage___remoteFile___relativeDirectory'
  | 'seo___opengraphImage___remoteFile___dev'
  | 'seo___opengraphImage___remoteFile___mode'
  | 'seo___opengraphImage___remoteFile___nlink'
  | 'seo___opengraphImage___remoteFile___uid'
  | 'seo___opengraphImage___remoteFile___gid'
  | 'seo___opengraphImage___remoteFile___rdev'
  | 'seo___opengraphImage___remoteFile___ino'
  | 'seo___opengraphImage___remoteFile___atimeMs'
  | 'seo___opengraphImage___remoteFile___mtimeMs'
  | 'seo___opengraphImage___remoteFile___ctimeMs'
  | 'seo___opengraphImage___remoteFile___atime'
  | 'seo___opengraphImage___remoteFile___mtime'
  | 'seo___opengraphImage___remoteFile___ctime'
  | 'seo___opengraphImage___remoteFile___birthtime'
  | 'seo___opengraphImage___remoteFile___birthtimeMs'
  | 'seo___opengraphImage___remoteFile___blksize'
  | 'seo___opengraphImage___remoteFile___blocks'
  | 'seo___opengraphImage___remoteFile___publicURL'
  | 'seo___opengraphImage___remoteFile___childrenImageSharp'
  | 'seo___opengraphImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___remoteFile___id'
  | 'seo___opengraphImage___remoteFile___children'
  | 'seo___opengraphImage___localFile___sourceInstanceName'
  | 'seo___opengraphImage___localFile___absolutePath'
  | 'seo___opengraphImage___localFile___relativePath'
  | 'seo___opengraphImage___localFile___extension'
  | 'seo___opengraphImage___localFile___size'
  | 'seo___opengraphImage___localFile___prettySize'
  | 'seo___opengraphImage___localFile___modifiedTime'
  | 'seo___opengraphImage___localFile___accessTime'
  | 'seo___opengraphImage___localFile___changeTime'
  | 'seo___opengraphImage___localFile___birthTime'
  | 'seo___opengraphImage___localFile___root'
  | 'seo___opengraphImage___localFile___dir'
  | 'seo___opengraphImage___localFile___base'
  | 'seo___opengraphImage___localFile___ext'
  | 'seo___opengraphImage___localFile___name'
  | 'seo___opengraphImage___localFile___relativeDirectory'
  | 'seo___opengraphImage___localFile___dev'
  | 'seo___opengraphImage___localFile___mode'
  | 'seo___opengraphImage___localFile___nlink'
  | 'seo___opengraphImage___localFile___uid'
  | 'seo___opengraphImage___localFile___gid'
  | 'seo___opengraphImage___localFile___rdev'
  | 'seo___opengraphImage___localFile___ino'
  | 'seo___opengraphImage___localFile___atimeMs'
  | 'seo___opengraphImage___localFile___mtimeMs'
  | 'seo___opengraphImage___localFile___ctimeMs'
  | 'seo___opengraphImage___localFile___atime'
  | 'seo___opengraphImage___localFile___mtime'
  | 'seo___opengraphImage___localFile___ctime'
  | 'seo___opengraphImage___localFile___birthtime'
  | 'seo___opengraphImage___localFile___birthtimeMs'
  | 'seo___opengraphImage___localFile___blksize'
  | 'seo___opengraphImage___localFile___blocks'
  | 'seo___opengraphImage___localFile___publicURL'
  | 'seo___opengraphImage___localFile___childrenImageSharp'
  | 'seo___opengraphImage___localFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___localFile___id'
  | 'seo___opengraphImage___localFile___children'
  | 'seo___opengraphImage___parent___id'
  | 'seo___opengraphImage___parent___children'
  | 'seo___opengraphImage___children'
  | 'seo___opengraphImage___children___id'
  | 'seo___opengraphImage___children___children'
  | 'seo___opengraphImage___internal___content'
  | 'seo___opengraphImage___internal___contentDigest'
  | 'seo___opengraphImage___internal___description'
  | 'seo___opengraphImage___internal___fieldOwners'
  | 'seo___opengraphImage___internal___ignoreType'
  | 'seo___opengraphImage___internal___mediaType'
  | 'seo___opengraphImage___internal___owner'
  | 'seo___opengraphImage___internal___type'
  | 'seo___opengraphModifiedTime'
  | 'seo___opengraphPublishedTime'
  | 'seo___opengraphPublisher'
  | 'seo___opengraphSiteName'
  | 'seo___opengraphTitle'
  | 'seo___opengraphType'
  | 'seo___opengraphUrl'
  | 'seo___readingTime'
  | 'seo___schema___articleType'
  | 'seo___schema___pageType'
  | 'seo___schema___raw'
  | 'seo___title'
  | 'seo___twitterDescription'
  | 'seo___twitterImage___altText'
  | 'seo___twitterImage___ancestors___nodes'
  | 'seo___twitterImage___authorDatabaseId'
  | 'seo___twitterImage___authorId'
  | 'seo___twitterImage___caption'
  | 'seo___twitterImage___wpChildren___nodes'
  | 'seo___twitterImage___commentCount'
  | 'seo___twitterImage___commentStatus'
  | 'seo___twitterImage___comments___nodes'
  | 'seo___twitterImage___databaseId'
  | 'seo___twitterImage___date'
  | 'seo___twitterImage___dateGmt'
  | 'seo___twitterImage___description'
  | 'seo___twitterImage___desiredSlug'
  | 'seo___twitterImage___enclosure'
  | 'seo___twitterImage___fileSize'
  | 'seo___twitterImage___guid'
  | 'seo___twitterImage___id'
  | 'seo___twitterImage___link'
  | 'seo___twitterImage___mediaDetails___file'
  | 'seo___twitterImage___mediaDetails___height'
  | 'seo___twitterImage___mediaDetails___sizes'
  | 'seo___twitterImage___mediaDetails___width'
  | 'seo___twitterImage___mediaItemUrl'
  | 'seo___twitterImage___mediaType'
  | 'seo___twitterImage___mimeType'
  | 'seo___twitterImage___modified'
  | 'seo___twitterImage___modifiedGmt'
  | 'seo___twitterImage___parentDatabaseId'
  | 'seo___twitterImage___parentId'
  | 'seo___twitterImage___seo___breadcrumbs'
  | 'seo___twitterImage___seo___canonical'
  | 'seo___twitterImage___seo___cornerstone'
  | 'seo___twitterImage___seo___focuskw'
  | 'seo___twitterImage___seo___fullHead'
  | 'seo___twitterImage___seo___metaDesc'
  | 'seo___twitterImage___seo___metaKeywords'
  | 'seo___twitterImage___seo___metaRobotsNofollow'
  | 'seo___twitterImage___seo___metaRobotsNoindex'
  | 'seo___twitterImage___seo___opengraphAuthor'
  | 'seo___twitterImage___seo___opengraphDescription'
  | 'seo___twitterImage___seo___opengraphModifiedTime'
  | 'seo___twitterImage___seo___opengraphPublishedTime'
  | 'seo___twitterImage___seo___opengraphPublisher'
  | 'seo___twitterImage___seo___opengraphSiteName'
  | 'seo___twitterImage___seo___opengraphTitle'
  | 'seo___twitterImage___seo___opengraphType'
  | 'seo___twitterImage___seo___opengraphUrl'
  | 'seo___twitterImage___seo___readingTime'
  | 'seo___twitterImage___seo___title'
  | 'seo___twitterImage___seo___twitterDescription'
  | 'seo___twitterImage___seo___twitterTitle'
  | 'seo___twitterImage___sizes'
  | 'seo___twitterImage___slug'
  | 'seo___twitterImage___sourceUrl'
  | 'seo___twitterImage___srcSet'
  | 'seo___twitterImage___status'
  | 'seo___twitterImage___template___templateName'
  | 'seo___twitterImage___title'
  | 'seo___twitterImage___uri'
  | 'seo___twitterImage___nodeType'
  | 'seo___twitterImage___remoteFile___sourceInstanceName'
  | 'seo___twitterImage___remoteFile___absolutePath'
  | 'seo___twitterImage___remoteFile___relativePath'
  | 'seo___twitterImage___remoteFile___extension'
  | 'seo___twitterImage___remoteFile___size'
  | 'seo___twitterImage___remoteFile___prettySize'
  | 'seo___twitterImage___remoteFile___modifiedTime'
  | 'seo___twitterImage___remoteFile___accessTime'
  | 'seo___twitterImage___remoteFile___changeTime'
  | 'seo___twitterImage___remoteFile___birthTime'
  | 'seo___twitterImage___remoteFile___root'
  | 'seo___twitterImage___remoteFile___dir'
  | 'seo___twitterImage___remoteFile___base'
  | 'seo___twitterImage___remoteFile___ext'
  | 'seo___twitterImage___remoteFile___name'
  | 'seo___twitterImage___remoteFile___relativeDirectory'
  | 'seo___twitterImage___remoteFile___dev'
  | 'seo___twitterImage___remoteFile___mode'
  | 'seo___twitterImage___remoteFile___nlink'
  | 'seo___twitterImage___remoteFile___uid'
  | 'seo___twitterImage___remoteFile___gid'
  | 'seo___twitterImage___remoteFile___rdev'
  | 'seo___twitterImage___remoteFile___ino'
  | 'seo___twitterImage___remoteFile___atimeMs'
  | 'seo___twitterImage___remoteFile___mtimeMs'
  | 'seo___twitterImage___remoteFile___ctimeMs'
  | 'seo___twitterImage___remoteFile___atime'
  | 'seo___twitterImage___remoteFile___mtime'
  | 'seo___twitterImage___remoteFile___ctime'
  | 'seo___twitterImage___remoteFile___birthtime'
  | 'seo___twitterImage___remoteFile___birthtimeMs'
  | 'seo___twitterImage___remoteFile___blksize'
  | 'seo___twitterImage___remoteFile___blocks'
  | 'seo___twitterImage___remoteFile___publicURL'
  | 'seo___twitterImage___remoteFile___childrenImageSharp'
  | 'seo___twitterImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___remoteFile___id'
  | 'seo___twitterImage___remoteFile___children'
  | 'seo___twitterImage___localFile___sourceInstanceName'
  | 'seo___twitterImage___localFile___absolutePath'
  | 'seo___twitterImage___localFile___relativePath'
  | 'seo___twitterImage___localFile___extension'
  | 'seo___twitterImage___localFile___size'
  | 'seo___twitterImage___localFile___prettySize'
  | 'seo___twitterImage___localFile___modifiedTime'
  | 'seo___twitterImage___localFile___accessTime'
  | 'seo___twitterImage___localFile___changeTime'
  | 'seo___twitterImage___localFile___birthTime'
  | 'seo___twitterImage___localFile___root'
  | 'seo___twitterImage___localFile___dir'
  | 'seo___twitterImage___localFile___base'
  | 'seo___twitterImage___localFile___ext'
  | 'seo___twitterImage___localFile___name'
  | 'seo___twitterImage___localFile___relativeDirectory'
  | 'seo___twitterImage___localFile___dev'
  | 'seo___twitterImage___localFile___mode'
  | 'seo___twitterImage___localFile___nlink'
  | 'seo___twitterImage___localFile___uid'
  | 'seo___twitterImage___localFile___gid'
  | 'seo___twitterImage___localFile___rdev'
  | 'seo___twitterImage___localFile___ino'
  | 'seo___twitterImage___localFile___atimeMs'
  | 'seo___twitterImage___localFile___mtimeMs'
  | 'seo___twitterImage___localFile___ctimeMs'
  | 'seo___twitterImage___localFile___atime'
  | 'seo___twitterImage___localFile___mtime'
  | 'seo___twitterImage___localFile___ctime'
  | 'seo___twitterImage___localFile___birthtime'
  | 'seo___twitterImage___localFile___birthtimeMs'
  | 'seo___twitterImage___localFile___blksize'
  | 'seo___twitterImage___localFile___blocks'
  | 'seo___twitterImage___localFile___publicURL'
  | 'seo___twitterImage___localFile___childrenImageSharp'
  | 'seo___twitterImage___localFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___localFile___id'
  | 'seo___twitterImage___localFile___children'
  | 'seo___twitterImage___parent___id'
  | 'seo___twitterImage___parent___children'
  | 'seo___twitterImage___children'
  | 'seo___twitterImage___children___id'
  | 'seo___twitterImage___children___children'
  | 'seo___twitterImage___internal___content'
  | 'seo___twitterImage___internal___contentDigest'
  | 'seo___twitterImage___internal___description'
  | 'seo___twitterImage___internal___fieldOwners'
  | 'seo___twitterImage___internal___ignoreType'
  | 'seo___twitterImage___internal___mediaType'
  | 'seo___twitterImage___internal___owner'
  | 'seo___twitterImage___internal___type'
  | 'seo___twitterTitle'
  | 'slug'
  | 'status'
  | 'tags___nodes'
  | 'tags___nodes___contentNodes___nodes'
  | 'tags___nodes___count'
  | 'tags___nodes___databaseId'
  | 'tags___nodes___description'
  | 'tags___nodes___id'
  | 'tags___nodes___link'
  | 'tags___nodes___name'
  | 'tags___nodes___posts___nodes'
  | 'tags___nodes___seo___breadcrumbs'
  | 'tags___nodes___seo___canonical'
  | 'tags___nodes___seo___cornerstone'
  | 'tags___nodes___seo___focuskw'
  | 'tags___nodes___seo___fullHead'
  | 'tags___nodes___seo___metaDesc'
  | 'tags___nodes___seo___metaKeywords'
  | 'tags___nodes___seo___metaRobotsNofollow'
  | 'tags___nodes___seo___metaRobotsNoindex'
  | 'tags___nodes___seo___opengraphAuthor'
  | 'tags___nodes___seo___opengraphDescription'
  | 'tags___nodes___seo___opengraphModifiedTime'
  | 'tags___nodes___seo___opengraphPublishedTime'
  | 'tags___nodes___seo___opengraphPublisher'
  | 'tags___nodes___seo___opengraphSiteName'
  | 'tags___nodes___seo___opengraphTitle'
  | 'tags___nodes___seo___opengraphType'
  | 'tags___nodes___seo___opengraphUrl'
  | 'tags___nodes___seo___title'
  | 'tags___nodes___seo___twitterDescription'
  | 'tags___nodes___seo___twitterTitle'
  | 'tags___nodes___slug'
  | 'tags___nodes___termGroupId'
  | 'tags___nodes___termTaxonomyId'
  | 'tags___nodes___uri'
  | 'tags___nodes___nodeType'
  | 'tags___nodes___parent___id'
  | 'tags___nodes___parent___children'
  | 'tags___nodes___children'
  | 'tags___nodes___children___id'
  | 'tags___nodes___children___children'
  | 'tags___nodes___internal___content'
  | 'tags___nodes___internal___contentDigest'
  | 'tags___nodes___internal___description'
  | 'tags___nodes___internal___fieldOwners'
  | 'tags___nodes___internal___ignoreType'
  | 'tags___nodes___internal___mediaType'
  | 'tags___nodes___internal___owner'
  | 'tags___nodes___internal___type'
  | 'template___templateName'
  | 'terms___nodes'
  | 'terms___nodes___count'
  | 'terms___nodes___databaseId'
  | 'terms___nodes___description'
  | 'terms___nodes___id'
  | 'terms___nodes___link'
  | 'terms___nodes___name'
  | 'terms___nodes___slug'
  | 'terms___nodes___termGroupId'
  | 'terms___nodes___termTaxonomyId'
  | 'terms___nodes___uri'
  | 'terms___nodes___nodeType'
  | 'terms___nodes___parent___id'
  | 'terms___nodes___parent___children'
  | 'terms___nodes___children'
  | 'terms___nodes___children___id'
  | 'terms___nodes___children___children'
  | 'terms___nodes___internal___content'
  | 'terms___nodes___internal___contentDigest'
  | 'terms___nodes___internal___description'
  | 'terms___nodes___internal___fieldOwners'
  | 'terms___nodes___internal___ignoreType'
  | 'terms___nodes___internal___mediaType'
  | 'terms___nodes___internal___owner'
  | 'terms___nodes___internal___type'
  | 'title'
  | 'toPing'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostEdge>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPostSortInput = {
  fields?: Maybe<Array<Maybe<WpPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpTermNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTermNodeEdge>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpTermNodeGroupConnection>;
};


export type WpTermNodeConnectionDistinctArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionMaxArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionMinArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionSumArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTermNodeFieldsEnum;
};

export type WpTermNodeEdge = {
  next?: Maybe<WpTermNode>;
  node: WpTermNode;
  previous?: Maybe<WpTermNode>;
};

export type WpTermNodeFieldsEnum =
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'slug'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpTermNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTermNodeEdge>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTermNodeSortInput = {
  fields?: Maybe<Array<Maybe<WpTermNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCategoryEdge>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpCategoryGroupConnection>;
};


export type WpCategoryConnectionDistinctArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionMaxArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionMinArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionSumArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpCategoryFieldsEnum;
};

export type WpCategoryEdge = {
  next?: Maybe<WpCategory>;
  node: WpCategory;
  previous?: Maybe<WpCategory>;
};

export type WpCategoryFieldsEnum =
  | 'ancestors___nodes'
  | 'ancestors___nodes___ancestors___nodes'
  | 'ancestors___nodes___wpChildren___nodes'
  | 'ancestors___nodes___contentNodes___nodes'
  | 'ancestors___nodes___count'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___description'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___name'
  | 'ancestors___nodes___parentDatabaseId'
  | 'ancestors___nodes___parentId'
  | 'ancestors___nodes___posts___nodes'
  | 'ancestors___nodes___seo___breadcrumbs'
  | 'ancestors___nodes___seo___canonical'
  | 'ancestors___nodes___seo___cornerstone'
  | 'ancestors___nodes___seo___focuskw'
  | 'ancestors___nodes___seo___fullHead'
  | 'ancestors___nodes___seo___metaDesc'
  | 'ancestors___nodes___seo___metaKeywords'
  | 'ancestors___nodes___seo___metaRobotsNofollow'
  | 'ancestors___nodes___seo___metaRobotsNoindex'
  | 'ancestors___nodes___seo___opengraphAuthor'
  | 'ancestors___nodes___seo___opengraphDescription'
  | 'ancestors___nodes___seo___opengraphModifiedTime'
  | 'ancestors___nodes___seo___opengraphPublishedTime'
  | 'ancestors___nodes___seo___opengraphPublisher'
  | 'ancestors___nodes___seo___opengraphSiteName'
  | 'ancestors___nodes___seo___opengraphTitle'
  | 'ancestors___nodes___seo___opengraphType'
  | 'ancestors___nodes___seo___opengraphUrl'
  | 'ancestors___nodes___seo___title'
  | 'ancestors___nodes___seo___twitterDescription'
  | 'ancestors___nodes___seo___twitterTitle'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___termGroupId'
  | 'ancestors___nodes___termTaxonomyId'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'ancestors___nodes___parent___id'
  | 'ancestors___nodes___parent___children'
  | 'ancestors___nodes___children'
  | 'ancestors___nodes___children___id'
  | 'ancestors___nodes___children___children'
  | 'ancestors___nodes___internal___content'
  | 'ancestors___nodes___internal___contentDigest'
  | 'ancestors___nodes___internal___description'
  | 'ancestors___nodes___internal___fieldOwners'
  | 'ancestors___nodes___internal___ignoreType'
  | 'ancestors___nodes___internal___mediaType'
  | 'ancestors___nodes___internal___owner'
  | 'ancestors___nodes___internal___type'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___ancestors___nodes'
  | 'wpChildren___nodes___wpChildren___nodes'
  | 'wpChildren___nodes___contentNodes___nodes'
  | 'wpChildren___nodes___count'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___description'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___name'
  | 'wpChildren___nodes___parentDatabaseId'
  | 'wpChildren___nodes___parentId'
  | 'wpChildren___nodes___posts___nodes'
  | 'wpChildren___nodes___seo___breadcrumbs'
  | 'wpChildren___nodes___seo___canonical'
  | 'wpChildren___nodes___seo___cornerstone'
  | 'wpChildren___nodes___seo___focuskw'
  | 'wpChildren___nodes___seo___fullHead'
  | 'wpChildren___nodes___seo___metaDesc'
  | 'wpChildren___nodes___seo___metaKeywords'
  | 'wpChildren___nodes___seo___metaRobotsNofollow'
  | 'wpChildren___nodes___seo___metaRobotsNoindex'
  | 'wpChildren___nodes___seo___opengraphAuthor'
  | 'wpChildren___nodes___seo___opengraphDescription'
  | 'wpChildren___nodes___seo___opengraphModifiedTime'
  | 'wpChildren___nodes___seo___opengraphPublishedTime'
  | 'wpChildren___nodes___seo___opengraphPublisher'
  | 'wpChildren___nodes___seo___opengraphSiteName'
  | 'wpChildren___nodes___seo___opengraphTitle'
  | 'wpChildren___nodes___seo___opengraphType'
  | 'wpChildren___nodes___seo___opengraphUrl'
  | 'wpChildren___nodes___seo___title'
  | 'wpChildren___nodes___seo___twitterDescription'
  | 'wpChildren___nodes___seo___twitterTitle'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___termGroupId'
  | 'wpChildren___nodes___termTaxonomyId'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'wpChildren___nodes___parent___id'
  | 'wpChildren___nodes___parent___children'
  | 'wpChildren___nodes___children'
  | 'wpChildren___nodes___children___id'
  | 'wpChildren___nodes___children___children'
  | 'wpChildren___nodes___internal___content'
  | 'wpChildren___nodes___internal___contentDigest'
  | 'wpChildren___nodes___internal___description'
  | 'wpChildren___nodes___internal___fieldOwners'
  | 'wpChildren___nodes___internal___ignoreType'
  | 'wpChildren___nodes___internal___mediaType'
  | 'wpChildren___nodes___internal___owner'
  | 'wpChildren___nodes___internal___type'
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'contentNodes___nodes___parent___id'
  | 'contentNodes___nodes___parent___children'
  | 'contentNodes___nodes___children'
  | 'contentNodes___nodes___children___id'
  | 'contentNodes___nodes___children___children'
  | 'contentNodes___nodes___internal___content'
  | 'contentNodes___nodes___internal___contentDigest'
  | 'contentNodes___nodes___internal___description'
  | 'contentNodes___nodes___internal___fieldOwners'
  | 'contentNodes___nodes___internal___ignoreType'
  | 'contentNodes___nodes___internal___mediaType'
  | 'contentNodes___nodes___internal___owner'
  | 'contentNodes___nodes___internal___type'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'wpParent___node___ancestors___nodes'
  | 'wpParent___node___wpChildren___nodes'
  | 'wpParent___node___contentNodes___nodes'
  | 'wpParent___node___count'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___description'
  | 'wpParent___node___id'
  | 'wpParent___node___link'
  | 'wpParent___node___name'
  | 'wpParent___node___parentDatabaseId'
  | 'wpParent___node___parentId'
  | 'wpParent___node___posts___nodes'
  | 'wpParent___node___seo___breadcrumbs'
  | 'wpParent___node___seo___canonical'
  | 'wpParent___node___seo___cornerstone'
  | 'wpParent___node___seo___focuskw'
  | 'wpParent___node___seo___fullHead'
  | 'wpParent___node___seo___metaDesc'
  | 'wpParent___node___seo___metaKeywords'
  | 'wpParent___node___seo___metaRobotsNofollow'
  | 'wpParent___node___seo___metaRobotsNoindex'
  | 'wpParent___node___seo___opengraphAuthor'
  | 'wpParent___node___seo___opengraphDescription'
  | 'wpParent___node___seo___opengraphModifiedTime'
  | 'wpParent___node___seo___opengraphPublishedTime'
  | 'wpParent___node___seo___opengraphPublisher'
  | 'wpParent___node___seo___opengraphSiteName'
  | 'wpParent___node___seo___opengraphTitle'
  | 'wpParent___node___seo___opengraphType'
  | 'wpParent___node___seo___opengraphUrl'
  | 'wpParent___node___seo___title'
  | 'wpParent___node___seo___twitterDescription'
  | 'wpParent___node___seo___twitterTitle'
  | 'wpParent___node___slug'
  | 'wpParent___node___termGroupId'
  | 'wpParent___node___termTaxonomyId'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___seo___breadcrumbs'
  | 'posts___nodes___seo___canonical'
  | 'posts___nodes___seo___cornerstone'
  | 'posts___nodes___seo___focuskw'
  | 'posts___nodes___seo___fullHead'
  | 'posts___nodes___seo___metaDesc'
  | 'posts___nodes___seo___metaKeywords'
  | 'posts___nodes___seo___metaRobotsNofollow'
  | 'posts___nodes___seo___metaRobotsNoindex'
  | 'posts___nodes___seo___opengraphAuthor'
  | 'posts___nodes___seo___opengraphDescription'
  | 'posts___nodes___seo___opengraphModifiedTime'
  | 'posts___nodes___seo___opengraphPublishedTime'
  | 'posts___nodes___seo___opengraphPublisher'
  | 'posts___nodes___seo___opengraphSiteName'
  | 'posts___nodes___seo___opengraphTitle'
  | 'posts___nodes___seo___opengraphType'
  | 'posts___nodes___seo___opengraphUrl'
  | 'posts___nodes___seo___readingTime'
  | 'posts___nodes___seo___title'
  | 'posts___nodes___seo___twitterDescription'
  | 'posts___nodes___seo___twitterTitle'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'seo___breadcrumbs'
  | 'seo___breadcrumbs___text'
  | 'seo___breadcrumbs___url'
  | 'seo___canonical'
  | 'seo___cornerstone'
  | 'seo___focuskw'
  | 'seo___fullHead'
  | 'seo___metaDesc'
  | 'seo___metaKeywords'
  | 'seo___metaRobotsNofollow'
  | 'seo___metaRobotsNoindex'
  | 'seo___opengraphAuthor'
  | 'seo___opengraphDescription'
  | 'seo___opengraphImage___altText'
  | 'seo___opengraphImage___ancestors___nodes'
  | 'seo___opengraphImage___authorDatabaseId'
  | 'seo___opengraphImage___authorId'
  | 'seo___opengraphImage___caption'
  | 'seo___opengraphImage___wpChildren___nodes'
  | 'seo___opengraphImage___commentCount'
  | 'seo___opengraphImage___commentStatus'
  | 'seo___opengraphImage___comments___nodes'
  | 'seo___opengraphImage___databaseId'
  | 'seo___opengraphImage___date'
  | 'seo___opengraphImage___dateGmt'
  | 'seo___opengraphImage___description'
  | 'seo___opengraphImage___desiredSlug'
  | 'seo___opengraphImage___enclosure'
  | 'seo___opengraphImage___fileSize'
  | 'seo___opengraphImage___guid'
  | 'seo___opengraphImage___id'
  | 'seo___opengraphImage___link'
  | 'seo___opengraphImage___mediaDetails___file'
  | 'seo___opengraphImage___mediaDetails___height'
  | 'seo___opengraphImage___mediaDetails___sizes'
  | 'seo___opengraphImage___mediaDetails___width'
  | 'seo___opengraphImage___mediaItemUrl'
  | 'seo___opengraphImage___mediaType'
  | 'seo___opengraphImage___mimeType'
  | 'seo___opengraphImage___modified'
  | 'seo___opengraphImage___modifiedGmt'
  | 'seo___opengraphImage___parentDatabaseId'
  | 'seo___opengraphImage___parentId'
  | 'seo___opengraphImage___seo___breadcrumbs'
  | 'seo___opengraphImage___seo___canonical'
  | 'seo___opengraphImage___seo___cornerstone'
  | 'seo___opengraphImage___seo___focuskw'
  | 'seo___opengraphImage___seo___fullHead'
  | 'seo___opengraphImage___seo___metaDesc'
  | 'seo___opengraphImage___seo___metaKeywords'
  | 'seo___opengraphImage___seo___metaRobotsNofollow'
  | 'seo___opengraphImage___seo___metaRobotsNoindex'
  | 'seo___opengraphImage___seo___opengraphAuthor'
  | 'seo___opengraphImage___seo___opengraphDescription'
  | 'seo___opengraphImage___seo___opengraphModifiedTime'
  | 'seo___opengraphImage___seo___opengraphPublishedTime'
  | 'seo___opengraphImage___seo___opengraphPublisher'
  | 'seo___opengraphImage___seo___opengraphSiteName'
  | 'seo___opengraphImage___seo___opengraphTitle'
  | 'seo___opengraphImage___seo___opengraphType'
  | 'seo___opengraphImage___seo___opengraphUrl'
  | 'seo___opengraphImage___seo___readingTime'
  | 'seo___opengraphImage___seo___title'
  | 'seo___opengraphImage___seo___twitterDescription'
  | 'seo___opengraphImage___seo___twitterTitle'
  | 'seo___opengraphImage___sizes'
  | 'seo___opengraphImage___slug'
  | 'seo___opengraphImage___sourceUrl'
  | 'seo___opengraphImage___srcSet'
  | 'seo___opengraphImage___status'
  | 'seo___opengraphImage___template___templateName'
  | 'seo___opengraphImage___title'
  | 'seo___opengraphImage___uri'
  | 'seo___opengraphImage___nodeType'
  | 'seo___opengraphImage___remoteFile___sourceInstanceName'
  | 'seo___opengraphImage___remoteFile___absolutePath'
  | 'seo___opengraphImage___remoteFile___relativePath'
  | 'seo___opengraphImage___remoteFile___extension'
  | 'seo___opengraphImage___remoteFile___size'
  | 'seo___opengraphImage___remoteFile___prettySize'
  | 'seo___opengraphImage___remoteFile___modifiedTime'
  | 'seo___opengraphImage___remoteFile___accessTime'
  | 'seo___opengraphImage___remoteFile___changeTime'
  | 'seo___opengraphImage___remoteFile___birthTime'
  | 'seo___opengraphImage___remoteFile___root'
  | 'seo___opengraphImage___remoteFile___dir'
  | 'seo___opengraphImage___remoteFile___base'
  | 'seo___opengraphImage___remoteFile___ext'
  | 'seo___opengraphImage___remoteFile___name'
  | 'seo___opengraphImage___remoteFile___relativeDirectory'
  | 'seo___opengraphImage___remoteFile___dev'
  | 'seo___opengraphImage___remoteFile___mode'
  | 'seo___opengraphImage___remoteFile___nlink'
  | 'seo___opengraphImage___remoteFile___uid'
  | 'seo___opengraphImage___remoteFile___gid'
  | 'seo___opengraphImage___remoteFile___rdev'
  | 'seo___opengraphImage___remoteFile___ino'
  | 'seo___opengraphImage___remoteFile___atimeMs'
  | 'seo___opengraphImage___remoteFile___mtimeMs'
  | 'seo___opengraphImage___remoteFile___ctimeMs'
  | 'seo___opengraphImage___remoteFile___atime'
  | 'seo___opengraphImage___remoteFile___mtime'
  | 'seo___opengraphImage___remoteFile___ctime'
  | 'seo___opengraphImage___remoteFile___birthtime'
  | 'seo___opengraphImage___remoteFile___birthtimeMs'
  | 'seo___opengraphImage___remoteFile___blksize'
  | 'seo___opengraphImage___remoteFile___blocks'
  | 'seo___opengraphImage___remoteFile___publicURL'
  | 'seo___opengraphImage___remoteFile___childrenImageSharp'
  | 'seo___opengraphImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___remoteFile___id'
  | 'seo___opengraphImage___remoteFile___children'
  | 'seo___opengraphImage___localFile___sourceInstanceName'
  | 'seo___opengraphImage___localFile___absolutePath'
  | 'seo___opengraphImage___localFile___relativePath'
  | 'seo___opengraphImage___localFile___extension'
  | 'seo___opengraphImage___localFile___size'
  | 'seo___opengraphImage___localFile___prettySize'
  | 'seo___opengraphImage___localFile___modifiedTime'
  | 'seo___opengraphImage___localFile___accessTime'
  | 'seo___opengraphImage___localFile___changeTime'
  | 'seo___opengraphImage___localFile___birthTime'
  | 'seo___opengraphImage___localFile___root'
  | 'seo___opengraphImage___localFile___dir'
  | 'seo___opengraphImage___localFile___base'
  | 'seo___opengraphImage___localFile___ext'
  | 'seo___opengraphImage___localFile___name'
  | 'seo___opengraphImage___localFile___relativeDirectory'
  | 'seo___opengraphImage___localFile___dev'
  | 'seo___opengraphImage___localFile___mode'
  | 'seo___opengraphImage___localFile___nlink'
  | 'seo___opengraphImage___localFile___uid'
  | 'seo___opengraphImage___localFile___gid'
  | 'seo___opengraphImage___localFile___rdev'
  | 'seo___opengraphImage___localFile___ino'
  | 'seo___opengraphImage___localFile___atimeMs'
  | 'seo___opengraphImage___localFile___mtimeMs'
  | 'seo___opengraphImage___localFile___ctimeMs'
  | 'seo___opengraphImage___localFile___atime'
  | 'seo___opengraphImage___localFile___mtime'
  | 'seo___opengraphImage___localFile___ctime'
  | 'seo___opengraphImage___localFile___birthtime'
  | 'seo___opengraphImage___localFile___birthtimeMs'
  | 'seo___opengraphImage___localFile___blksize'
  | 'seo___opengraphImage___localFile___blocks'
  | 'seo___opengraphImage___localFile___publicURL'
  | 'seo___opengraphImage___localFile___childrenImageSharp'
  | 'seo___opengraphImage___localFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___localFile___id'
  | 'seo___opengraphImage___localFile___children'
  | 'seo___opengraphImage___parent___id'
  | 'seo___opengraphImage___parent___children'
  | 'seo___opengraphImage___children'
  | 'seo___opengraphImage___children___id'
  | 'seo___opengraphImage___children___children'
  | 'seo___opengraphImage___internal___content'
  | 'seo___opengraphImage___internal___contentDigest'
  | 'seo___opengraphImage___internal___description'
  | 'seo___opengraphImage___internal___fieldOwners'
  | 'seo___opengraphImage___internal___ignoreType'
  | 'seo___opengraphImage___internal___mediaType'
  | 'seo___opengraphImage___internal___owner'
  | 'seo___opengraphImage___internal___type'
  | 'seo___opengraphModifiedTime'
  | 'seo___opengraphPublishedTime'
  | 'seo___opengraphPublisher'
  | 'seo___opengraphSiteName'
  | 'seo___opengraphTitle'
  | 'seo___opengraphType'
  | 'seo___opengraphUrl'
  | 'seo___schema___raw'
  | 'seo___title'
  | 'seo___twitterDescription'
  | 'seo___twitterImage___altText'
  | 'seo___twitterImage___ancestors___nodes'
  | 'seo___twitterImage___authorDatabaseId'
  | 'seo___twitterImage___authorId'
  | 'seo___twitterImage___caption'
  | 'seo___twitterImage___wpChildren___nodes'
  | 'seo___twitterImage___commentCount'
  | 'seo___twitterImage___commentStatus'
  | 'seo___twitterImage___comments___nodes'
  | 'seo___twitterImage___databaseId'
  | 'seo___twitterImage___date'
  | 'seo___twitterImage___dateGmt'
  | 'seo___twitterImage___description'
  | 'seo___twitterImage___desiredSlug'
  | 'seo___twitterImage___enclosure'
  | 'seo___twitterImage___fileSize'
  | 'seo___twitterImage___guid'
  | 'seo___twitterImage___id'
  | 'seo___twitterImage___link'
  | 'seo___twitterImage___mediaDetails___file'
  | 'seo___twitterImage___mediaDetails___height'
  | 'seo___twitterImage___mediaDetails___sizes'
  | 'seo___twitterImage___mediaDetails___width'
  | 'seo___twitterImage___mediaItemUrl'
  | 'seo___twitterImage___mediaType'
  | 'seo___twitterImage___mimeType'
  | 'seo___twitterImage___modified'
  | 'seo___twitterImage___modifiedGmt'
  | 'seo___twitterImage___parentDatabaseId'
  | 'seo___twitterImage___parentId'
  | 'seo___twitterImage___seo___breadcrumbs'
  | 'seo___twitterImage___seo___canonical'
  | 'seo___twitterImage___seo___cornerstone'
  | 'seo___twitterImage___seo___focuskw'
  | 'seo___twitterImage___seo___fullHead'
  | 'seo___twitterImage___seo___metaDesc'
  | 'seo___twitterImage___seo___metaKeywords'
  | 'seo___twitterImage___seo___metaRobotsNofollow'
  | 'seo___twitterImage___seo___metaRobotsNoindex'
  | 'seo___twitterImage___seo___opengraphAuthor'
  | 'seo___twitterImage___seo___opengraphDescription'
  | 'seo___twitterImage___seo___opengraphModifiedTime'
  | 'seo___twitterImage___seo___opengraphPublishedTime'
  | 'seo___twitterImage___seo___opengraphPublisher'
  | 'seo___twitterImage___seo___opengraphSiteName'
  | 'seo___twitterImage___seo___opengraphTitle'
  | 'seo___twitterImage___seo___opengraphType'
  | 'seo___twitterImage___seo___opengraphUrl'
  | 'seo___twitterImage___seo___readingTime'
  | 'seo___twitterImage___seo___title'
  | 'seo___twitterImage___seo___twitterDescription'
  | 'seo___twitterImage___seo___twitterTitle'
  | 'seo___twitterImage___sizes'
  | 'seo___twitterImage___slug'
  | 'seo___twitterImage___sourceUrl'
  | 'seo___twitterImage___srcSet'
  | 'seo___twitterImage___status'
  | 'seo___twitterImage___template___templateName'
  | 'seo___twitterImage___title'
  | 'seo___twitterImage___uri'
  | 'seo___twitterImage___nodeType'
  | 'seo___twitterImage___remoteFile___sourceInstanceName'
  | 'seo___twitterImage___remoteFile___absolutePath'
  | 'seo___twitterImage___remoteFile___relativePath'
  | 'seo___twitterImage___remoteFile___extension'
  | 'seo___twitterImage___remoteFile___size'
  | 'seo___twitterImage___remoteFile___prettySize'
  | 'seo___twitterImage___remoteFile___modifiedTime'
  | 'seo___twitterImage___remoteFile___accessTime'
  | 'seo___twitterImage___remoteFile___changeTime'
  | 'seo___twitterImage___remoteFile___birthTime'
  | 'seo___twitterImage___remoteFile___root'
  | 'seo___twitterImage___remoteFile___dir'
  | 'seo___twitterImage___remoteFile___base'
  | 'seo___twitterImage___remoteFile___ext'
  | 'seo___twitterImage___remoteFile___name'
  | 'seo___twitterImage___remoteFile___relativeDirectory'
  | 'seo___twitterImage___remoteFile___dev'
  | 'seo___twitterImage___remoteFile___mode'
  | 'seo___twitterImage___remoteFile___nlink'
  | 'seo___twitterImage___remoteFile___uid'
  | 'seo___twitterImage___remoteFile___gid'
  | 'seo___twitterImage___remoteFile___rdev'
  | 'seo___twitterImage___remoteFile___ino'
  | 'seo___twitterImage___remoteFile___atimeMs'
  | 'seo___twitterImage___remoteFile___mtimeMs'
  | 'seo___twitterImage___remoteFile___ctimeMs'
  | 'seo___twitterImage___remoteFile___atime'
  | 'seo___twitterImage___remoteFile___mtime'
  | 'seo___twitterImage___remoteFile___ctime'
  | 'seo___twitterImage___remoteFile___birthtime'
  | 'seo___twitterImage___remoteFile___birthtimeMs'
  | 'seo___twitterImage___remoteFile___blksize'
  | 'seo___twitterImage___remoteFile___blocks'
  | 'seo___twitterImage___remoteFile___publicURL'
  | 'seo___twitterImage___remoteFile___childrenImageSharp'
  | 'seo___twitterImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___remoteFile___id'
  | 'seo___twitterImage___remoteFile___children'
  | 'seo___twitterImage___localFile___sourceInstanceName'
  | 'seo___twitterImage___localFile___absolutePath'
  | 'seo___twitterImage___localFile___relativePath'
  | 'seo___twitterImage___localFile___extension'
  | 'seo___twitterImage___localFile___size'
  | 'seo___twitterImage___localFile___prettySize'
  | 'seo___twitterImage___localFile___modifiedTime'
  | 'seo___twitterImage___localFile___accessTime'
  | 'seo___twitterImage___localFile___changeTime'
  | 'seo___twitterImage___localFile___birthTime'
  | 'seo___twitterImage___localFile___root'
  | 'seo___twitterImage___localFile___dir'
  | 'seo___twitterImage___localFile___base'
  | 'seo___twitterImage___localFile___ext'
  | 'seo___twitterImage___localFile___name'
  | 'seo___twitterImage___localFile___relativeDirectory'
  | 'seo___twitterImage___localFile___dev'
  | 'seo___twitterImage___localFile___mode'
  | 'seo___twitterImage___localFile___nlink'
  | 'seo___twitterImage___localFile___uid'
  | 'seo___twitterImage___localFile___gid'
  | 'seo___twitterImage___localFile___rdev'
  | 'seo___twitterImage___localFile___ino'
  | 'seo___twitterImage___localFile___atimeMs'
  | 'seo___twitterImage___localFile___mtimeMs'
  | 'seo___twitterImage___localFile___ctimeMs'
  | 'seo___twitterImage___localFile___atime'
  | 'seo___twitterImage___localFile___mtime'
  | 'seo___twitterImage___localFile___ctime'
  | 'seo___twitterImage___localFile___birthtime'
  | 'seo___twitterImage___localFile___birthtimeMs'
  | 'seo___twitterImage___localFile___blksize'
  | 'seo___twitterImage___localFile___blocks'
  | 'seo___twitterImage___localFile___publicURL'
  | 'seo___twitterImage___localFile___childrenImageSharp'
  | 'seo___twitterImage___localFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___localFile___id'
  | 'seo___twitterImage___localFile___children'
  | 'seo___twitterImage___parent___id'
  | 'seo___twitterImage___parent___children'
  | 'seo___twitterImage___children'
  | 'seo___twitterImage___children___id'
  | 'seo___twitterImage___children___children'
  | 'seo___twitterImage___internal___content'
  | 'seo___twitterImage___internal___contentDigest'
  | 'seo___twitterImage___internal___description'
  | 'seo___twitterImage___internal___fieldOwners'
  | 'seo___twitterImage___internal___ignoreType'
  | 'seo___twitterImage___internal___mediaType'
  | 'seo___twitterImage___internal___owner'
  | 'seo___twitterImage___internal___type'
  | 'seo___twitterTitle'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCategoryEdge>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpCategorySortInput = {
  fields?: Maybe<Array<Maybe<WpCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpPostFormatConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostFormatEdge>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpPostFormatGroupConnection>;
};


export type WpPostFormatConnectionDistinctArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionMaxArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionMinArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionSumArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPostFormatFieldsEnum;
};

export type WpPostFormatEdge = {
  next?: Maybe<WpPostFormat>;
  node: WpPostFormat;
  previous?: Maybe<WpPostFormat>;
};

export type WpPostFormatFieldsEnum =
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'contentNodes___nodes___parent___id'
  | 'contentNodes___nodes___parent___children'
  | 'contentNodes___nodes___children'
  | 'contentNodes___nodes___children___id'
  | 'contentNodes___nodes___children___children'
  | 'contentNodes___nodes___internal___content'
  | 'contentNodes___nodes___internal___contentDigest'
  | 'contentNodes___nodes___internal___description'
  | 'contentNodes___nodes___internal___fieldOwners'
  | 'contentNodes___nodes___internal___ignoreType'
  | 'contentNodes___nodes___internal___mediaType'
  | 'contentNodes___nodes___internal___owner'
  | 'contentNodes___nodes___internal___type'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___seo___breadcrumbs'
  | 'posts___nodes___seo___canonical'
  | 'posts___nodes___seo___cornerstone'
  | 'posts___nodes___seo___focuskw'
  | 'posts___nodes___seo___fullHead'
  | 'posts___nodes___seo___metaDesc'
  | 'posts___nodes___seo___metaKeywords'
  | 'posts___nodes___seo___metaRobotsNofollow'
  | 'posts___nodes___seo___metaRobotsNoindex'
  | 'posts___nodes___seo___opengraphAuthor'
  | 'posts___nodes___seo___opengraphDescription'
  | 'posts___nodes___seo___opengraphModifiedTime'
  | 'posts___nodes___seo___opengraphPublishedTime'
  | 'posts___nodes___seo___opengraphPublisher'
  | 'posts___nodes___seo___opengraphSiteName'
  | 'posts___nodes___seo___opengraphTitle'
  | 'posts___nodes___seo___opengraphType'
  | 'posts___nodes___seo___opengraphUrl'
  | 'posts___nodes___seo___readingTime'
  | 'posts___nodes___seo___title'
  | 'posts___nodes___seo___twitterDescription'
  | 'posts___nodes___seo___twitterTitle'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'seo___breadcrumbs'
  | 'seo___breadcrumbs___text'
  | 'seo___breadcrumbs___url'
  | 'seo___canonical'
  | 'seo___cornerstone'
  | 'seo___focuskw'
  | 'seo___fullHead'
  | 'seo___metaDesc'
  | 'seo___metaKeywords'
  | 'seo___metaRobotsNofollow'
  | 'seo___metaRobotsNoindex'
  | 'seo___opengraphAuthor'
  | 'seo___opengraphDescription'
  | 'seo___opengraphImage___altText'
  | 'seo___opengraphImage___ancestors___nodes'
  | 'seo___opengraphImage___authorDatabaseId'
  | 'seo___opengraphImage___authorId'
  | 'seo___opengraphImage___caption'
  | 'seo___opengraphImage___wpChildren___nodes'
  | 'seo___opengraphImage___commentCount'
  | 'seo___opengraphImage___commentStatus'
  | 'seo___opengraphImage___comments___nodes'
  | 'seo___opengraphImage___databaseId'
  | 'seo___opengraphImage___date'
  | 'seo___opengraphImage___dateGmt'
  | 'seo___opengraphImage___description'
  | 'seo___opengraphImage___desiredSlug'
  | 'seo___opengraphImage___enclosure'
  | 'seo___opengraphImage___fileSize'
  | 'seo___opengraphImage___guid'
  | 'seo___opengraphImage___id'
  | 'seo___opengraphImage___link'
  | 'seo___opengraphImage___mediaDetails___file'
  | 'seo___opengraphImage___mediaDetails___height'
  | 'seo___opengraphImage___mediaDetails___sizes'
  | 'seo___opengraphImage___mediaDetails___width'
  | 'seo___opengraphImage___mediaItemUrl'
  | 'seo___opengraphImage___mediaType'
  | 'seo___opengraphImage___mimeType'
  | 'seo___opengraphImage___modified'
  | 'seo___opengraphImage___modifiedGmt'
  | 'seo___opengraphImage___parentDatabaseId'
  | 'seo___opengraphImage___parentId'
  | 'seo___opengraphImage___seo___breadcrumbs'
  | 'seo___opengraphImage___seo___canonical'
  | 'seo___opengraphImage___seo___cornerstone'
  | 'seo___opengraphImage___seo___focuskw'
  | 'seo___opengraphImage___seo___fullHead'
  | 'seo___opengraphImage___seo___metaDesc'
  | 'seo___opengraphImage___seo___metaKeywords'
  | 'seo___opengraphImage___seo___metaRobotsNofollow'
  | 'seo___opengraphImage___seo___metaRobotsNoindex'
  | 'seo___opengraphImage___seo___opengraphAuthor'
  | 'seo___opengraphImage___seo___opengraphDescription'
  | 'seo___opengraphImage___seo___opengraphModifiedTime'
  | 'seo___opengraphImage___seo___opengraphPublishedTime'
  | 'seo___opengraphImage___seo___opengraphPublisher'
  | 'seo___opengraphImage___seo___opengraphSiteName'
  | 'seo___opengraphImage___seo___opengraphTitle'
  | 'seo___opengraphImage___seo___opengraphType'
  | 'seo___opengraphImage___seo___opengraphUrl'
  | 'seo___opengraphImage___seo___readingTime'
  | 'seo___opengraphImage___seo___title'
  | 'seo___opengraphImage___seo___twitterDescription'
  | 'seo___opengraphImage___seo___twitterTitle'
  | 'seo___opengraphImage___sizes'
  | 'seo___opengraphImage___slug'
  | 'seo___opengraphImage___sourceUrl'
  | 'seo___opengraphImage___srcSet'
  | 'seo___opengraphImage___status'
  | 'seo___opengraphImage___template___templateName'
  | 'seo___opengraphImage___title'
  | 'seo___opengraphImage___uri'
  | 'seo___opengraphImage___nodeType'
  | 'seo___opengraphImage___remoteFile___sourceInstanceName'
  | 'seo___opengraphImage___remoteFile___absolutePath'
  | 'seo___opengraphImage___remoteFile___relativePath'
  | 'seo___opengraphImage___remoteFile___extension'
  | 'seo___opengraphImage___remoteFile___size'
  | 'seo___opengraphImage___remoteFile___prettySize'
  | 'seo___opengraphImage___remoteFile___modifiedTime'
  | 'seo___opengraphImage___remoteFile___accessTime'
  | 'seo___opengraphImage___remoteFile___changeTime'
  | 'seo___opengraphImage___remoteFile___birthTime'
  | 'seo___opengraphImage___remoteFile___root'
  | 'seo___opengraphImage___remoteFile___dir'
  | 'seo___opengraphImage___remoteFile___base'
  | 'seo___opengraphImage___remoteFile___ext'
  | 'seo___opengraphImage___remoteFile___name'
  | 'seo___opengraphImage___remoteFile___relativeDirectory'
  | 'seo___opengraphImage___remoteFile___dev'
  | 'seo___opengraphImage___remoteFile___mode'
  | 'seo___opengraphImage___remoteFile___nlink'
  | 'seo___opengraphImage___remoteFile___uid'
  | 'seo___opengraphImage___remoteFile___gid'
  | 'seo___opengraphImage___remoteFile___rdev'
  | 'seo___opengraphImage___remoteFile___ino'
  | 'seo___opengraphImage___remoteFile___atimeMs'
  | 'seo___opengraphImage___remoteFile___mtimeMs'
  | 'seo___opengraphImage___remoteFile___ctimeMs'
  | 'seo___opengraphImage___remoteFile___atime'
  | 'seo___opengraphImage___remoteFile___mtime'
  | 'seo___opengraphImage___remoteFile___ctime'
  | 'seo___opengraphImage___remoteFile___birthtime'
  | 'seo___opengraphImage___remoteFile___birthtimeMs'
  | 'seo___opengraphImage___remoteFile___blksize'
  | 'seo___opengraphImage___remoteFile___blocks'
  | 'seo___opengraphImage___remoteFile___publicURL'
  | 'seo___opengraphImage___remoteFile___childrenImageSharp'
  | 'seo___opengraphImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___remoteFile___id'
  | 'seo___opengraphImage___remoteFile___children'
  | 'seo___opengraphImage___localFile___sourceInstanceName'
  | 'seo___opengraphImage___localFile___absolutePath'
  | 'seo___opengraphImage___localFile___relativePath'
  | 'seo___opengraphImage___localFile___extension'
  | 'seo___opengraphImage___localFile___size'
  | 'seo___opengraphImage___localFile___prettySize'
  | 'seo___opengraphImage___localFile___modifiedTime'
  | 'seo___opengraphImage___localFile___accessTime'
  | 'seo___opengraphImage___localFile___changeTime'
  | 'seo___opengraphImage___localFile___birthTime'
  | 'seo___opengraphImage___localFile___root'
  | 'seo___opengraphImage___localFile___dir'
  | 'seo___opengraphImage___localFile___base'
  | 'seo___opengraphImage___localFile___ext'
  | 'seo___opengraphImage___localFile___name'
  | 'seo___opengraphImage___localFile___relativeDirectory'
  | 'seo___opengraphImage___localFile___dev'
  | 'seo___opengraphImage___localFile___mode'
  | 'seo___opengraphImage___localFile___nlink'
  | 'seo___opengraphImage___localFile___uid'
  | 'seo___opengraphImage___localFile___gid'
  | 'seo___opengraphImage___localFile___rdev'
  | 'seo___opengraphImage___localFile___ino'
  | 'seo___opengraphImage___localFile___atimeMs'
  | 'seo___opengraphImage___localFile___mtimeMs'
  | 'seo___opengraphImage___localFile___ctimeMs'
  | 'seo___opengraphImage___localFile___atime'
  | 'seo___opengraphImage___localFile___mtime'
  | 'seo___opengraphImage___localFile___ctime'
  | 'seo___opengraphImage___localFile___birthtime'
  | 'seo___opengraphImage___localFile___birthtimeMs'
  | 'seo___opengraphImage___localFile___blksize'
  | 'seo___opengraphImage___localFile___blocks'
  | 'seo___opengraphImage___localFile___publicURL'
  | 'seo___opengraphImage___localFile___childrenImageSharp'
  | 'seo___opengraphImage___localFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___localFile___id'
  | 'seo___opengraphImage___localFile___children'
  | 'seo___opengraphImage___parent___id'
  | 'seo___opengraphImage___parent___children'
  | 'seo___opengraphImage___children'
  | 'seo___opengraphImage___children___id'
  | 'seo___opengraphImage___children___children'
  | 'seo___opengraphImage___internal___content'
  | 'seo___opengraphImage___internal___contentDigest'
  | 'seo___opengraphImage___internal___description'
  | 'seo___opengraphImage___internal___fieldOwners'
  | 'seo___opengraphImage___internal___ignoreType'
  | 'seo___opengraphImage___internal___mediaType'
  | 'seo___opengraphImage___internal___owner'
  | 'seo___opengraphImage___internal___type'
  | 'seo___opengraphModifiedTime'
  | 'seo___opengraphPublishedTime'
  | 'seo___opengraphPublisher'
  | 'seo___opengraphSiteName'
  | 'seo___opengraphTitle'
  | 'seo___opengraphType'
  | 'seo___opengraphUrl'
  | 'seo___schema___raw'
  | 'seo___title'
  | 'seo___twitterDescription'
  | 'seo___twitterImage___altText'
  | 'seo___twitterImage___ancestors___nodes'
  | 'seo___twitterImage___authorDatabaseId'
  | 'seo___twitterImage___authorId'
  | 'seo___twitterImage___caption'
  | 'seo___twitterImage___wpChildren___nodes'
  | 'seo___twitterImage___commentCount'
  | 'seo___twitterImage___commentStatus'
  | 'seo___twitterImage___comments___nodes'
  | 'seo___twitterImage___databaseId'
  | 'seo___twitterImage___date'
  | 'seo___twitterImage___dateGmt'
  | 'seo___twitterImage___description'
  | 'seo___twitterImage___desiredSlug'
  | 'seo___twitterImage___enclosure'
  | 'seo___twitterImage___fileSize'
  | 'seo___twitterImage___guid'
  | 'seo___twitterImage___id'
  | 'seo___twitterImage___link'
  | 'seo___twitterImage___mediaDetails___file'
  | 'seo___twitterImage___mediaDetails___height'
  | 'seo___twitterImage___mediaDetails___sizes'
  | 'seo___twitterImage___mediaDetails___width'
  | 'seo___twitterImage___mediaItemUrl'
  | 'seo___twitterImage___mediaType'
  | 'seo___twitterImage___mimeType'
  | 'seo___twitterImage___modified'
  | 'seo___twitterImage___modifiedGmt'
  | 'seo___twitterImage___parentDatabaseId'
  | 'seo___twitterImage___parentId'
  | 'seo___twitterImage___seo___breadcrumbs'
  | 'seo___twitterImage___seo___canonical'
  | 'seo___twitterImage___seo___cornerstone'
  | 'seo___twitterImage___seo___focuskw'
  | 'seo___twitterImage___seo___fullHead'
  | 'seo___twitterImage___seo___metaDesc'
  | 'seo___twitterImage___seo___metaKeywords'
  | 'seo___twitterImage___seo___metaRobotsNofollow'
  | 'seo___twitterImage___seo___metaRobotsNoindex'
  | 'seo___twitterImage___seo___opengraphAuthor'
  | 'seo___twitterImage___seo___opengraphDescription'
  | 'seo___twitterImage___seo___opengraphModifiedTime'
  | 'seo___twitterImage___seo___opengraphPublishedTime'
  | 'seo___twitterImage___seo___opengraphPublisher'
  | 'seo___twitterImage___seo___opengraphSiteName'
  | 'seo___twitterImage___seo___opengraphTitle'
  | 'seo___twitterImage___seo___opengraphType'
  | 'seo___twitterImage___seo___opengraphUrl'
  | 'seo___twitterImage___seo___readingTime'
  | 'seo___twitterImage___seo___title'
  | 'seo___twitterImage___seo___twitterDescription'
  | 'seo___twitterImage___seo___twitterTitle'
  | 'seo___twitterImage___sizes'
  | 'seo___twitterImage___slug'
  | 'seo___twitterImage___sourceUrl'
  | 'seo___twitterImage___srcSet'
  | 'seo___twitterImage___status'
  | 'seo___twitterImage___template___templateName'
  | 'seo___twitterImage___title'
  | 'seo___twitterImage___uri'
  | 'seo___twitterImage___nodeType'
  | 'seo___twitterImage___remoteFile___sourceInstanceName'
  | 'seo___twitterImage___remoteFile___absolutePath'
  | 'seo___twitterImage___remoteFile___relativePath'
  | 'seo___twitterImage___remoteFile___extension'
  | 'seo___twitterImage___remoteFile___size'
  | 'seo___twitterImage___remoteFile___prettySize'
  | 'seo___twitterImage___remoteFile___modifiedTime'
  | 'seo___twitterImage___remoteFile___accessTime'
  | 'seo___twitterImage___remoteFile___changeTime'
  | 'seo___twitterImage___remoteFile___birthTime'
  | 'seo___twitterImage___remoteFile___root'
  | 'seo___twitterImage___remoteFile___dir'
  | 'seo___twitterImage___remoteFile___base'
  | 'seo___twitterImage___remoteFile___ext'
  | 'seo___twitterImage___remoteFile___name'
  | 'seo___twitterImage___remoteFile___relativeDirectory'
  | 'seo___twitterImage___remoteFile___dev'
  | 'seo___twitterImage___remoteFile___mode'
  | 'seo___twitterImage___remoteFile___nlink'
  | 'seo___twitterImage___remoteFile___uid'
  | 'seo___twitterImage___remoteFile___gid'
  | 'seo___twitterImage___remoteFile___rdev'
  | 'seo___twitterImage___remoteFile___ino'
  | 'seo___twitterImage___remoteFile___atimeMs'
  | 'seo___twitterImage___remoteFile___mtimeMs'
  | 'seo___twitterImage___remoteFile___ctimeMs'
  | 'seo___twitterImage___remoteFile___atime'
  | 'seo___twitterImage___remoteFile___mtime'
  | 'seo___twitterImage___remoteFile___ctime'
  | 'seo___twitterImage___remoteFile___birthtime'
  | 'seo___twitterImage___remoteFile___birthtimeMs'
  | 'seo___twitterImage___remoteFile___blksize'
  | 'seo___twitterImage___remoteFile___blocks'
  | 'seo___twitterImage___remoteFile___publicURL'
  | 'seo___twitterImage___remoteFile___childrenImageSharp'
  | 'seo___twitterImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___remoteFile___id'
  | 'seo___twitterImage___remoteFile___children'
  | 'seo___twitterImage___localFile___sourceInstanceName'
  | 'seo___twitterImage___localFile___absolutePath'
  | 'seo___twitterImage___localFile___relativePath'
  | 'seo___twitterImage___localFile___extension'
  | 'seo___twitterImage___localFile___size'
  | 'seo___twitterImage___localFile___prettySize'
  | 'seo___twitterImage___localFile___modifiedTime'
  | 'seo___twitterImage___localFile___accessTime'
  | 'seo___twitterImage___localFile___changeTime'
  | 'seo___twitterImage___localFile___birthTime'
  | 'seo___twitterImage___localFile___root'
  | 'seo___twitterImage___localFile___dir'
  | 'seo___twitterImage___localFile___base'
  | 'seo___twitterImage___localFile___ext'
  | 'seo___twitterImage___localFile___name'
  | 'seo___twitterImage___localFile___relativeDirectory'
  | 'seo___twitterImage___localFile___dev'
  | 'seo___twitterImage___localFile___mode'
  | 'seo___twitterImage___localFile___nlink'
  | 'seo___twitterImage___localFile___uid'
  | 'seo___twitterImage___localFile___gid'
  | 'seo___twitterImage___localFile___rdev'
  | 'seo___twitterImage___localFile___ino'
  | 'seo___twitterImage___localFile___atimeMs'
  | 'seo___twitterImage___localFile___mtimeMs'
  | 'seo___twitterImage___localFile___ctimeMs'
  | 'seo___twitterImage___localFile___atime'
  | 'seo___twitterImage___localFile___mtime'
  | 'seo___twitterImage___localFile___ctime'
  | 'seo___twitterImage___localFile___birthtime'
  | 'seo___twitterImage___localFile___birthtimeMs'
  | 'seo___twitterImage___localFile___blksize'
  | 'seo___twitterImage___localFile___blocks'
  | 'seo___twitterImage___localFile___publicURL'
  | 'seo___twitterImage___localFile___childrenImageSharp'
  | 'seo___twitterImage___localFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___localFile___id'
  | 'seo___twitterImage___localFile___children'
  | 'seo___twitterImage___parent___id'
  | 'seo___twitterImage___parent___children'
  | 'seo___twitterImage___children'
  | 'seo___twitterImage___children___id'
  | 'seo___twitterImage___children___children'
  | 'seo___twitterImage___internal___content'
  | 'seo___twitterImage___internal___contentDigest'
  | 'seo___twitterImage___internal___description'
  | 'seo___twitterImage___internal___fieldOwners'
  | 'seo___twitterImage___internal___ignoreType'
  | 'seo___twitterImage___internal___mediaType'
  | 'seo___twitterImage___internal___owner'
  | 'seo___twitterImage___internal___type'
  | 'seo___twitterTitle'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPostFormatGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostFormatEdge>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPostFormatSortInput = {
  fields?: Maybe<Array<Maybe<WpPostFormatFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpTagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTagEdge>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpTagGroupConnection>;
};


export type WpTagConnectionDistinctArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionMaxArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionMinArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionSumArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTagFieldsEnum;
};

export type WpTagEdge = {
  next?: Maybe<WpTag>;
  node: WpTag;
  previous?: Maybe<WpTag>;
};

export type WpTagFieldsEnum =
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'contentNodes___nodes___parent___id'
  | 'contentNodes___nodes___parent___children'
  | 'contentNodes___nodes___children'
  | 'contentNodes___nodes___children___id'
  | 'contentNodes___nodes___children___children'
  | 'contentNodes___nodes___internal___content'
  | 'contentNodes___nodes___internal___contentDigest'
  | 'contentNodes___nodes___internal___description'
  | 'contentNodes___nodes___internal___fieldOwners'
  | 'contentNodes___nodes___internal___ignoreType'
  | 'contentNodes___nodes___internal___mediaType'
  | 'contentNodes___nodes___internal___owner'
  | 'contentNodes___nodes___internal___type'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___seo___breadcrumbs'
  | 'posts___nodes___seo___canonical'
  | 'posts___nodes___seo___cornerstone'
  | 'posts___nodes___seo___focuskw'
  | 'posts___nodes___seo___fullHead'
  | 'posts___nodes___seo___metaDesc'
  | 'posts___nodes___seo___metaKeywords'
  | 'posts___nodes___seo___metaRobotsNofollow'
  | 'posts___nodes___seo___metaRobotsNoindex'
  | 'posts___nodes___seo___opengraphAuthor'
  | 'posts___nodes___seo___opengraphDescription'
  | 'posts___nodes___seo___opengraphModifiedTime'
  | 'posts___nodes___seo___opengraphPublishedTime'
  | 'posts___nodes___seo___opengraphPublisher'
  | 'posts___nodes___seo___opengraphSiteName'
  | 'posts___nodes___seo___opengraphTitle'
  | 'posts___nodes___seo___opengraphType'
  | 'posts___nodes___seo___opengraphUrl'
  | 'posts___nodes___seo___readingTime'
  | 'posts___nodes___seo___title'
  | 'posts___nodes___seo___twitterDescription'
  | 'posts___nodes___seo___twitterTitle'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'seo___breadcrumbs'
  | 'seo___breadcrumbs___text'
  | 'seo___breadcrumbs___url'
  | 'seo___canonical'
  | 'seo___cornerstone'
  | 'seo___focuskw'
  | 'seo___fullHead'
  | 'seo___metaDesc'
  | 'seo___metaKeywords'
  | 'seo___metaRobotsNofollow'
  | 'seo___metaRobotsNoindex'
  | 'seo___opengraphAuthor'
  | 'seo___opengraphDescription'
  | 'seo___opengraphImage___altText'
  | 'seo___opengraphImage___ancestors___nodes'
  | 'seo___opengraphImage___authorDatabaseId'
  | 'seo___opengraphImage___authorId'
  | 'seo___opengraphImage___caption'
  | 'seo___opengraphImage___wpChildren___nodes'
  | 'seo___opengraphImage___commentCount'
  | 'seo___opengraphImage___commentStatus'
  | 'seo___opengraphImage___comments___nodes'
  | 'seo___opengraphImage___databaseId'
  | 'seo___opengraphImage___date'
  | 'seo___opengraphImage___dateGmt'
  | 'seo___opengraphImage___description'
  | 'seo___opengraphImage___desiredSlug'
  | 'seo___opengraphImage___enclosure'
  | 'seo___opengraphImage___fileSize'
  | 'seo___opengraphImage___guid'
  | 'seo___opengraphImage___id'
  | 'seo___opengraphImage___link'
  | 'seo___opengraphImage___mediaDetails___file'
  | 'seo___opengraphImage___mediaDetails___height'
  | 'seo___opengraphImage___mediaDetails___sizes'
  | 'seo___opengraphImage___mediaDetails___width'
  | 'seo___opengraphImage___mediaItemUrl'
  | 'seo___opengraphImage___mediaType'
  | 'seo___opengraphImage___mimeType'
  | 'seo___opengraphImage___modified'
  | 'seo___opengraphImage___modifiedGmt'
  | 'seo___opengraphImage___parentDatabaseId'
  | 'seo___opengraphImage___parentId'
  | 'seo___opengraphImage___seo___breadcrumbs'
  | 'seo___opengraphImage___seo___canonical'
  | 'seo___opengraphImage___seo___cornerstone'
  | 'seo___opengraphImage___seo___focuskw'
  | 'seo___opengraphImage___seo___fullHead'
  | 'seo___opengraphImage___seo___metaDesc'
  | 'seo___opengraphImage___seo___metaKeywords'
  | 'seo___opengraphImage___seo___metaRobotsNofollow'
  | 'seo___opengraphImage___seo___metaRobotsNoindex'
  | 'seo___opengraphImage___seo___opengraphAuthor'
  | 'seo___opengraphImage___seo___opengraphDescription'
  | 'seo___opengraphImage___seo___opengraphModifiedTime'
  | 'seo___opengraphImage___seo___opengraphPublishedTime'
  | 'seo___opengraphImage___seo___opengraphPublisher'
  | 'seo___opengraphImage___seo___opengraphSiteName'
  | 'seo___opengraphImage___seo___opengraphTitle'
  | 'seo___opengraphImage___seo___opengraphType'
  | 'seo___opengraphImage___seo___opengraphUrl'
  | 'seo___opengraphImage___seo___readingTime'
  | 'seo___opengraphImage___seo___title'
  | 'seo___opengraphImage___seo___twitterDescription'
  | 'seo___opengraphImage___seo___twitterTitle'
  | 'seo___opengraphImage___sizes'
  | 'seo___opengraphImage___slug'
  | 'seo___opengraphImage___sourceUrl'
  | 'seo___opengraphImage___srcSet'
  | 'seo___opengraphImage___status'
  | 'seo___opengraphImage___template___templateName'
  | 'seo___opengraphImage___title'
  | 'seo___opengraphImage___uri'
  | 'seo___opengraphImage___nodeType'
  | 'seo___opengraphImage___remoteFile___sourceInstanceName'
  | 'seo___opengraphImage___remoteFile___absolutePath'
  | 'seo___opengraphImage___remoteFile___relativePath'
  | 'seo___opengraphImage___remoteFile___extension'
  | 'seo___opengraphImage___remoteFile___size'
  | 'seo___opengraphImage___remoteFile___prettySize'
  | 'seo___opengraphImage___remoteFile___modifiedTime'
  | 'seo___opengraphImage___remoteFile___accessTime'
  | 'seo___opengraphImage___remoteFile___changeTime'
  | 'seo___opengraphImage___remoteFile___birthTime'
  | 'seo___opengraphImage___remoteFile___root'
  | 'seo___opengraphImage___remoteFile___dir'
  | 'seo___opengraphImage___remoteFile___base'
  | 'seo___opengraphImage___remoteFile___ext'
  | 'seo___opengraphImage___remoteFile___name'
  | 'seo___opengraphImage___remoteFile___relativeDirectory'
  | 'seo___opengraphImage___remoteFile___dev'
  | 'seo___opengraphImage___remoteFile___mode'
  | 'seo___opengraphImage___remoteFile___nlink'
  | 'seo___opengraphImage___remoteFile___uid'
  | 'seo___opengraphImage___remoteFile___gid'
  | 'seo___opengraphImage___remoteFile___rdev'
  | 'seo___opengraphImage___remoteFile___ino'
  | 'seo___opengraphImage___remoteFile___atimeMs'
  | 'seo___opengraphImage___remoteFile___mtimeMs'
  | 'seo___opengraphImage___remoteFile___ctimeMs'
  | 'seo___opengraphImage___remoteFile___atime'
  | 'seo___opengraphImage___remoteFile___mtime'
  | 'seo___opengraphImage___remoteFile___ctime'
  | 'seo___opengraphImage___remoteFile___birthtime'
  | 'seo___opengraphImage___remoteFile___birthtimeMs'
  | 'seo___opengraphImage___remoteFile___blksize'
  | 'seo___opengraphImage___remoteFile___blocks'
  | 'seo___opengraphImage___remoteFile___publicURL'
  | 'seo___opengraphImage___remoteFile___childrenImageSharp'
  | 'seo___opengraphImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___remoteFile___id'
  | 'seo___opengraphImage___remoteFile___children'
  | 'seo___opengraphImage___localFile___sourceInstanceName'
  | 'seo___opengraphImage___localFile___absolutePath'
  | 'seo___opengraphImage___localFile___relativePath'
  | 'seo___opengraphImage___localFile___extension'
  | 'seo___opengraphImage___localFile___size'
  | 'seo___opengraphImage___localFile___prettySize'
  | 'seo___opengraphImage___localFile___modifiedTime'
  | 'seo___opengraphImage___localFile___accessTime'
  | 'seo___opengraphImage___localFile___changeTime'
  | 'seo___opengraphImage___localFile___birthTime'
  | 'seo___opengraphImage___localFile___root'
  | 'seo___opengraphImage___localFile___dir'
  | 'seo___opengraphImage___localFile___base'
  | 'seo___opengraphImage___localFile___ext'
  | 'seo___opengraphImage___localFile___name'
  | 'seo___opengraphImage___localFile___relativeDirectory'
  | 'seo___opengraphImage___localFile___dev'
  | 'seo___opengraphImage___localFile___mode'
  | 'seo___opengraphImage___localFile___nlink'
  | 'seo___opengraphImage___localFile___uid'
  | 'seo___opengraphImage___localFile___gid'
  | 'seo___opengraphImage___localFile___rdev'
  | 'seo___opengraphImage___localFile___ino'
  | 'seo___opengraphImage___localFile___atimeMs'
  | 'seo___opengraphImage___localFile___mtimeMs'
  | 'seo___opengraphImage___localFile___ctimeMs'
  | 'seo___opengraphImage___localFile___atime'
  | 'seo___opengraphImage___localFile___mtime'
  | 'seo___opengraphImage___localFile___ctime'
  | 'seo___opengraphImage___localFile___birthtime'
  | 'seo___opengraphImage___localFile___birthtimeMs'
  | 'seo___opengraphImage___localFile___blksize'
  | 'seo___opengraphImage___localFile___blocks'
  | 'seo___opengraphImage___localFile___publicURL'
  | 'seo___opengraphImage___localFile___childrenImageSharp'
  | 'seo___opengraphImage___localFile___childrenCloudinaryAsset'
  | 'seo___opengraphImage___localFile___id'
  | 'seo___opengraphImage___localFile___children'
  | 'seo___opengraphImage___parent___id'
  | 'seo___opengraphImage___parent___children'
  | 'seo___opengraphImage___children'
  | 'seo___opengraphImage___children___id'
  | 'seo___opengraphImage___children___children'
  | 'seo___opengraphImage___internal___content'
  | 'seo___opengraphImage___internal___contentDigest'
  | 'seo___opengraphImage___internal___description'
  | 'seo___opengraphImage___internal___fieldOwners'
  | 'seo___opengraphImage___internal___ignoreType'
  | 'seo___opengraphImage___internal___mediaType'
  | 'seo___opengraphImage___internal___owner'
  | 'seo___opengraphImage___internal___type'
  | 'seo___opengraphModifiedTime'
  | 'seo___opengraphPublishedTime'
  | 'seo___opengraphPublisher'
  | 'seo___opengraphSiteName'
  | 'seo___opengraphTitle'
  | 'seo___opengraphType'
  | 'seo___opengraphUrl'
  | 'seo___schema___raw'
  | 'seo___title'
  | 'seo___twitterDescription'
  | 'seo___twitterImage___altText'
  | 'seo___twitterImage___ancestors___nodes'
  | 'seo___twitterImage___authorDatabaseId'
  | 'seo___twitterImage___authorId'
  | 'seo___twitterImage___caption'
  | 'seo___twitterImage___wpChildren___nodes'
  | 'seo___twitterImage___commentCount'
  | 'seo___twitterImage___commentStatus'
  | 'seo___twitterImage___comments___nodes'
  | 'seo___twitterImage___databaseId'
  | 'seo___twitterImage___date'
  | 'seo___twitterImage___dateGmt'
  | 'seo___twitterImage___description'
  | 'seo___twitterImage___desiredSlug'
  | 'seo___twitterImage___enclosure'
  | 'seo___twitterImage___fileSize'
  | 'seo___twitterImage___guid'
  | 'seo___twitterImage___id'
  | 'seo___twitterImage___link'
  | 'seo___twitterImage___mediaDetails___file'
  | 'seo___twitterImage___mediaDetails___height'
  | 'seo___twitterImage___mediaDetails___sizes'
  | 'seo___twitterImage___mediaDetails___width'
  | 'seo___twitterImage___mediaItemUrl'
  | 'seo___twitterImage___mediaType'
  | 'seo___twitterImage___mimeType'
  | 'seo___twitterImage___modified'
  | 'seo___twitterImage___modifiedGmt'
  | 'seo___twitterImage___parentDatabaseId'
  | 'seo___twitterImage___parentId'
  | 'seo___twitterImage___seo___breadcrumbs'
  | 'seo___twitterImage___seo___canonical'
  | 'seo___twitterImage___seo___cornerstone'
  | 'seo___twitterImage___seo___focuskw'
  | 'seo___twitterImage___seo___fullHead'
  | 'seo___twitterImage___seo___metaDesc'
  | 'seo___twitterImage___seo___metaKeywords'
  | 'seo___twitterImage___seo___metaRobotsNofollow'
  | 'seo___twitterImage___seo___metaRobotsNoindex'
  | 'seo___twitterImage___seo___opengraphAuthor'
  | 'seo___twitterImage___seo___opengraphDescription'
  | 'seo___twitterImage___seo___opengraphModifiedTime'
  | 'seo___twitterImage___seo___opengraphPublishedTime'
  | 'seo___twitterImage___seo___opengraphPublisher'
  | 'seo___twitterImage___seo___opengraphSiteName'
  | 'seo___twitterImage___seo___opengraphTitle'
  | 'seo___twitterImage___seo___opengraphType'
  | 'seo___twitterImage___seo___opengraphUrl'
  | 'seo___twitterImage___seo___readingTime'
  | 'seo___twitterImage___seo___title'
  | 'seo___twitterImage___seo___twitterDescription'
  | 'seo___twitterImage___seo___twitterTitle'
  | 'seo___twitterImage___sizes'
  | 'seo___twitterImage___slug'
  | 'seo___twitterImage___sourceUrl'
  | 'seo___twitterImage___srcSet'
  | 'seo___twitterImage___status'
  | 'seo___twitterImage___template___templateName'
  | 'seo___twitterImage___title'
  | 'seo___twitterImage___uri'
  | 'seo___twitterImage___nodeType'
  | 'seo___twitterImage___remoteFile___sourceInstanceName'
  | 'seo___twitterImage___remoteFile___absolutePath'
  | 'seo___twitterImage___remoteFile___relativePath'
  | 'seo___twitterImage___remoteFile___extension'
  | 'seo___twitterImage___remoteFile___size'
  | 'seo___twitterImage___remoteFile___prettySize'
  | 'seo___twitterImage___remoteFile___modifiedTime'
  | 'seo___twitterImage___remoteFile___accessTime'
  | 'seo___twitterImage___remoteFile___changeTime'
  | 'seo___twitterImage___remoteFile___birthTime'
  | 'seo___twitterImage___remoteFile___root'
  | 'seo___twitterImage___remoteFile___dir'
  | 'seo___twitterImage___remoteFile___base'
  | 'seo___twitterImage___remoteFile___ext'
  | 'seo___twitterImage___remoteFile___name'
  | 'seo___twitterImage___remoteFile___relativeDirectory'
  | 'seo___twitterImage___remoteFile___dev'
  | 'seo___twitterImage___remoteFile___mode'
  | 'seo___twitterImage___remoteFile___nlink'
  | 'seo___twitterImage___remoteFile___uid'
  | 'seo___twitterImage___remoteFile___gid'
  | 'seo___twitterImage___remoteFile___rdev'
  | 'seo___twitterImage___remoteFile___ino'
  | 'seo___twitterImage___remoteFile___atimeMs'
  | 'seo___twitterImage___remoteFile___mtimeMs'
  | 'seo___twitterImage___remoteFile___ctimeMs'
  | 'seo___twitterImage___remoteFile___atime'
  | 'seo___twitterImage___remoteFile___mtime'
  | 'seo___twitterImage___remoteFile___ctime'
  | 'seo___twitterImage___remoteFile___birthtime'
  | 'seo___twitterImage___remoteFile___birthtimeMs'
  | 'seo___twitterImage___remoteFile___blksize'
  | 'seo___twitterImage___remoteFile___blocks'
  | 'seo___twitterImage___remoteFile___publicURL'
  | 'seo___twitterImage___remoteFile___childrenImageSharp'
  | 'seo___twitterImage___remoteFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___remoteFile___id'
  | 'seo___twitterImage___remoteFile___children'
  | 'seo___twitterImage___localFile___sourceInstanceName'
  | 'seo___twitterImage___localFile___absolutePath'
  | 'seo___twitterImage___localFile___relativePath'
  | 'seo___twitterImage___localFile___extension'
  | 'seo___twitterImage___localFile___size'
  | 'seo___twitterImage___localFile___prettySize'
  | 'seo___twitterImage___localFile___modifiedTime'
  | 'seo___twitterImage___localFile___accessTime'
  | 'seo___twitterImage___localFile___changeTime'
  | 'seo___twitterImage___localFile___birthTime'
  | 'seo___twitterImage___localFile___root'
  | 'seo___twitterImage___localFile___dir'
  | 'seo___twitterImage___localFile___base'
  | 'seo___twitterImage___localFile___ext'
  | 'seo___twitterImage___localFile___name'
  | 'seo___twitterImage___localFile___relativeDirectory'
  | 'seo___twitterImage___localFile___dev'
  | 'seo___twitterImage___localFile___mode'
  | 'seo___twitterImage___localFile___nlink'
  | 'seo___twitterImage___localFile___uid'
  | 'seo___twitterImage___localFile___gid'
  | 'seo___twitterImage___localFile___rdev'
  | 'seo___twitterImage___localFile___ino'
  | 'seo___twitterImage___localFile___atimeMs'
  | 'seo___twitterImage___localFile___mtimeMs'
  | 'seo___twitterImage___localFile___ctimeMs'
  | 'seo___twitterImage___localFile___atime'
  | 'seo___twitterImage___localFile___mtime'
  | 'seo___twitterImage___localFile___ctime'
  | 'seo___twitterImage___localFile___birthtime'
  | 'seo___twitterImage___localFile___birthtimeMs'
  | 'seo___twitterImage___localFile___blksize'
  | 'seo___twitterImage___localFile___blocks'
  | 'seo___twitterImage___localFile___publicURL'
  | 'seo___twitterImage___localFile___childrenImageSharp'
  | 'seo___twitterImage___localFile___childrenCloudinaryAsset'
  | 'seo___twitterImage___localFile___id'
  | 'seo___twitterImage___localFile___children'
  | 'seo___twitterImage___parent___id'
  | 'seo___twitterImage___parent___children'
  | 'seo___twitterImage___children'
  | 'seo___twitterImage___children___id'
  | 'seo___twitterImage___children___children'
  | 'seo___twitterImage___internal___content'
  | 'seo___twitterImage___internal___contentDigest'
  | 'seo___twitterImage___internal___description'
  | 'seo___twitterImage___internal___fieldOwners'
  | 'seo___twitterImage___internal___ignoreType'
  | 'seo___twitterImage___internal___mediaType'
  | 'seo___twitterImage___internal___owner'
  | 'seo___twitterImage___internal___type'
  | 'seo___twitterTitle'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpTagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTagEdge>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTagSortInput = {
  fields?: Maybe<Array<Maybe<WpTagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpUserRoleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserRoleEdge>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpUserRoleGroupConnection>;
};


export type WpUserRoleConnectionDistinctArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionMaxArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionMinArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionSumArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpUserRoleFieldsEnum;
};

export type WpUserRoleEdge = {
  next?: Maybe<WpUserRole>;
  node: WpUserRole;
  previous?: Maybe<WpUserRole>;
};

export type WpUserRoleFieldsEnum =
  | 'capabilities'
  | 'displayName'
  | 'id'
  | 'name'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpUserRoleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserRoleEdge>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpUserRoleSortInput = {
  fields?: Maybe<Array<Maybe<WpUserRoleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpMenuLocationEnumQueryOperatorInput = {
  eq?: Maybe<WpMenuLocationEnum>;
  ne?: Maybe<WpMenuLocationEnum>;
  in?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  nin?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
};

export type WpMenuToMenuItemConnectionFilterInput = {
  nodes?: Maybe<WpMenuItemFilterListInput>;
};

export type WpMenuItemFilterListInput = {
  elemMatch?: Maybe<WpMenuItemFilterInput>;
};

export type WpMenuItemFilterInput = {
  childItems?: Maybe<WpMenuItemToMenuItemConnectionFilterInput>;
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  linkRelationship?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: Maybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMenuItemToMenuItemConnectionFilterInput = {
  nodes?: Maybe<WpMenuItemFilterListInput>;
};

export type WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput = {
  node?: Maybe<WpMenuItemLinkableFilterInput>;
};

export type WpMenuItemLinkableFilterInput = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type WpMenuItemToMenuConnectionEdgeFilterInput = {
  node?: Maybe<WpMenuFilterInput>;
};

export type WpMenuFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: Maybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMenuConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuEdge>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpMenuGroupConnection>;
};


export type WpMenuConnectionDistinctArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionMaxArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionMinArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionSumArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMenuFieldsEnum;
};

export type WpMenuEdge = {
  next?: Maybe<WpMenu>;
  node: WpMenu;
  previous?: Maybe<WpMenu>;
};

export type WpMenuFieldsEnum =
  | 'count'
  | 'databaseId'
  | 'id'
  | 'locations'
  | 'menuItems___nodes'
  | 'menuItems___nodes___childItems___nodes'
  | 'menuItems___nodes___cssClasses'
  | 'menuItems___nodes___databaseId'
  | 'menuItems___nodes___description'
  | 'menuItems___nodes___id'
  | 'menuItems___nodes___label'
  | 'menuItems___nodes___linkRelationship'
  | 'menuItems___nodes___locations'
  | 'menuItems___nodes___order'
  | 'menuItems___nodes___parentDatabaseId'
  | 'menuItems___nodes___parentId'
  | 'menuItems___nodes___path'
  | 'menuItems___nodes___target'
  | 'menuItems___nodes___title'
  | 'menuItems___nodes___url'
  | 'menuItems___nodes___nodeType'
  | 'menuItems___nodes___parent___id'
  | 'menuItems___nodes___parent___children'
  | 'menuItems___nodes___children'
  | 'menuItems___nodes___children___id'
  | 'menuItems___nodes___children___children'
  | 'menuItems___nodes___internal___content'
  | 'menuItems___nodes___internal___contentDigest'
  | 'menuItems___nodes___internal___description'
  | 'menuItems___nodes___internal___fieldOwners'
  | 'menuItems___nodes___internal___ignoreType'
  | 'menuItems___nodes___internal___mediaType'
  | 'menuItems___nodes___internal___owner'
  | 'menuItems___nodes___internal___type'
  | 'name'
  | 'slug'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpMenuGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuEdge>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpMenuSortInput = {
  fields?: Maybe<Array<Maybe<WpMenuFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpMenuItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuItemEdge>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpMenuItemGroupConnection>;
};


export type WpMenuItemConnectionDistinctArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionMaxArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionMinArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionSumArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMenuItemFieldsEnum;
};

export type WpMenuItemEdge = {
  next?: Maybe<WpMenuItem>;
  node: WpMenuItem;
  previous?: Maybe<WpMenuItem>;
};

export type WpMenuItemFieldsEnum =
  | 'childItems___nodes'
  | 'childItems___nodes___childItems___nodes'
  | 'childItems___nodes___cssClasses'
  | 'childItems___nodes___databaseId'
  | 'childItems___nodes___description'
  | 'childItems___nodes___id'
  | 'childItems___nodes___label'
  | 'childItems___nodes___linkRelationship'
  | 'childItems___nodes___locations'
  | 'childItems___nodes___order'
  | 'childItems___nodes___parentDatabaseId'
  | 'childItems___nodes___parentId'
  | 'childItems___nodes___path'
  | 'childItems___nodes___target'
  | 'childItems___nodes___title'
  | 'childItems___nodes___url'
  | 'childItems___nodes___nodeType'
  | 'childItems___nodes___parent___id'
  | 'childItems___nodes___parent___children'
  | 'childItems___nodes___children'
  | 'childItems___nodes___children___id'
  | 'childItems___nodes___children___children'
  | 'childItems___nodes___internal___content'
  | 'childItems___nodes___internal___contentDigest'
  | 'childItems___nodes___internal___description'
  | 'childItems___nodes___internal___fieldOwners'
  | 'childItems___nodes___internal___ignoreType'
  | 'childItems___nodes___internal___mediaType'
  | 'childItems___nodes___internal___owner'
  | 'childItems___nodes___internal___type'
  | 'connectedNode___node___databaseId'
  | 'connectedNode___node___id'
  | 'connectedNode___node___uri'
  | 'cssClasses'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'label'
  | 'linkRelationship'
  | 'locations'
  | 'menu___node___count'
  | 'menu___node___databaseId'
  | 'menu___node___id'
  | 'menu___node___locations'
  | 'menu___node___menuItems___nodes'
  | 'menu___node___name'
  | 'menu___node___slug'
  | 'menu___node___nodeType'
  | 'menu___node___parent___id'
  | 'menu___node___parent___children'
  | 'menu___node___children'
  | 'menu___node___children___id'
  | 'menu___node___children___children'
  | 'menu___node___internal___content'
  | 'menu___node___internal___contentDigest'
  | 'menu___node___internal___description'
  | 'menu___node___internal___fieldOwners'
  | 'menu___node___internal___ignoreType'
  | 'menu___node___internal___mediaType'
  | 'menu___node___internal___owner'
  | 'menu___node___internal___type'
  | 'order'
  | 'parentDatabaseId'
  | 'parentId'
  | 'path'
  | 'target'
  | 'title'
  | 'url'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpMenuItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuItemEdge>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpMenuItemSortInput = {
  fields?: Maybe<Array<Maybe<WpMenuItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpSettingsFilterInput = {
  discussionSettingsDefaultCommentStatus?: Maybe<StringQueryOperatorInput>;
  discussionSettingsDefaultPingStatus?: Maybe<StringQueryOperatorInput>;
  generalSettingsDateFormat?: Maybe<StringQueryOperatorInput>;
  generalSettingsDescription?: Maybe<StringQueryOperatorInput>;
  generalSettingsEmail?: Maybe<StringQueryOperatorInput>;
  generalSettingsLanguage?: Maybe<StringQueryOperatorInput>;
  generalSettingsStartOfWeek?: Maybe<IntQueryOperatorInput>;
  generalSettingsTimeFormat?: Maybe<StringQueryOperatorInput>;
  generalSettingsTimezone?: Maybe<StringQueryOperatorInput>;
  generalSettingsTitle?: Maybe<StringQueryOperatorInput>;
  generalSettingsUrl?: Maybe<StringQueryOperatorInput>;
  readingSettingsPostsPerPage?: Maybe<IntQueryOperatorInput>;
  writingSettingsDefaultCategory?: Maybe<IntQueryOperatorInput>;
  writingSettingsDefaultPostFormat?: Maybe<StringQueryOperatorInput>;
  writingSettingsUseSmilies?: Maybe<BooleanQueryOperatorInput>;
};

export type WpDiscussionSettingsFilterInput = {
  defaultCommentStatus?: Maybe<StringQueryOperatorInput>;
  defaultPingStatus?: Maybe<StringQueryOperatorInput>;
};

export type WpGeneralSettingsFilterInput = {
  dateFormat?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  startOfWeek?: Maybe<IntQueryOperatorInput>;
  timeFormat?: Maybe<StringQueryOperatorInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpReadingSettingsFilterInput = {
  postsPerPage?: Maybe<IntQueryOperatorInput>;
};

export type WpSeoConfigFilterInput = {
  breadcrumbs?: Maybe<WpSeoBreadcrumbsFilterInput>;
  contentTypes?: Maybe<WpSeoContentTypesFilterInput>;
  openGraph?: Maybe<WpSeoOpenGraphFilterInput>;
  redirects?: Maybe<WpSeoRedirectFilterListInput>;
  schema?: Maybe<WpSeoSchemaFilterInput>;
  social?: Maybe<WpSeoSocialFilterInput>;
  webmaster?: Maybe<WpSeoWebmasterFilterInput>;
};

export type WpSeoBreadcrumbsFilterInput = {
  archivePrefix?: Maybe<StringQueryOperatorInput>;
  boldLast?: Maybe<BooleanQueryOperatorInput>;
  enabled?: Maybe<BooleanQueryOperatorInput>;
  homeText?: Maybe<StringQueryOperatorInput>;
  notFoundText?: Maybe<StringQueryOperatorInput>;
  prefix?: Maybe<StringQueryOperatorInput>;
  searchPrefix?: Maybe<StringQueryOperatorInput>;
  separator?: Maybe<StringQueryOperatorInput>;
  showBlogPage?: Maybe<BooleanQueryOperatorInput>;
};

export type WpSeoContentTypesFilterInput = {
  actionMonitorAction?: Maybe<WpSeoContentTypeFilterInput>;
  mediaItem?: Maybe<WpSeoContentTypeFilterInput>;
  page?: Maybe<WpSeoContentTypeFilterInput>;
  post?: Maybe<WpSeoContentTypeFilterInput>;
};

export type WpSeoContentTypeFilterInput = {
  archive?: Maybe<WpSeoContentTypeArchiveFilterInput>;
  metaDesc?: Maybe<StringQueryOperatorInput>;
  metaRobotsNoindex?: Maybe<BooleanQueryOperatorInput>;
  schema?: Maybe<WpSeoPageInfoSchemaFilterInput>;
  schemaType?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoContentTypeArchiveFilterInput = {
  archiveLink?: Maybe<StringQueryOperatorInput>;
  breadcrumbTitle?: Maybe<StringQueryOperatorInput>;
  fullHead?: Maybe<StringQueryOperatorInput>;
  hasArchive?: Maybe<BooleanQueryOperatorInput>;
  metaDesc?: Maybe<StringQueryOperatorInput>;
  metaRobotsNoindex?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoPageInfoSchemaFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoOpenGraphFilterInput = {
  defaultImage?: Maybe<WpMediaItemFilterInput>;
  frontPage?: Maybe<WpSeoOpenGraphFrontPageFilterInput>;
};

export type WpSeoOpenGraphFrontPageFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<WpMediaItemFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoRedirectFilterListInput = {
  elemMatch?: Maybe<WpSeoRedirectFilterInput>;
};

export type WpSeoRedirectFilterInput = {
  format?: Maybe<StringQueryOperatorInput>;
  origin?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<IntQueryOperatorInput>;
};

export type WpSeoSchemaFilterInput = {
  companyLogo?: Maybe<WpMediaItemFilterInput>;
  companyName?: Maybe<StringQueryOperatorInput>;
  companyOrPerson?: Maybe<StringQueryOperatorInput>;
  inLanguage?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<WpMediaItemFilterInput>;
  personLogo?: Maybe<WpMediaItemFilterInput>;
  personName?: Maybe<StringQueryOperatorInput>;
  siteName?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  wordpressSiteName?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoSocialFilterInput = {
  facebook?: Maybe<WpSeoSocialFacebookFilterInput>;
  instagram?: Maybe<WpSeoSocialInstagramFilterInput>;
  linkedIn?: Maybe<WpSeoSocialLinkedInFilterInput>;
  mySpace?: Maybe<WpSeoSocialMySpaceFilterInput>;
  pinterest?: Maybe<WpSeoSocialPinterestFilterInput>;
  twitter?: Maybe<WpSeoSocialTwitterFilterInput>;
  wikipedia?: Maybe<WpSeoSocialWikipediaFilterInput>;
  youTube?: Maybe<WpSeoSocialYoutubeFilterInput>;
};

export type WpSeoSocialFacebookFilterInput = {
  defaultImage?: Maybe<WpMediaItemFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoSocialInstagramFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoSocialLinkedInFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoSocialMySpaceFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoSocialPinterestFilterInput = {
  metaTag?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoSocialTwitterFilterInput = {
  cardType?: Maybe<WpSeoCardTypeQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoCardTypeQueryOperatorInput = {
  eq?: Maybe<WpSeoCardType>;
  ne?: Maybe<WpSeoCardType>;
  in?: Maybe<Array<Maybe<WpSeoCardType>>>;
  nin?: Maybe<Array<Maybe<WpSeoCardType>>>;
};

export type WpSeoSocialWikipediaFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoSocialYoutubeFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpSeoWebmasterFilterInput = {
  baiduVerify?: Maybe<StringQueryOperatorInput>;
  googleVerify?: Maybe<StringQueryOperatorInput>;
  msVerify?: Maybe<StringQueryOperatorInput>;
  yandexVerify?: Maybe<StringQueryOperatorInput>;
};

export type WpWpGatsbyFilterInput = {
  arePrettyPermalinksEnabled?: Maybe<BooleanQueryOperatorInput>;
};

export type WpWritingSettingsFilterInput = {
  defaultCategory?: Maybe<IntQueryOperatorInput>;
  defaultPostFormat?: Maybe<StringQueryOperatorInput>;
  useSmilies?: Maybe<BooleanQueryOperatorInput>;
};

export type WpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpEdge>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpGroupConnection>;
};


export type WpConnectionDistinctArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionMaxArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionMinArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionSumArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpFieldsEnum;
};

export type WpEdge = {
  next?: Maybe<Wp>;
  node: Wp;
  previous?: Maybe<Wp>;
};

export type WpFieldsEnum =
  | 'allSettings___discussionSettingsDefaultCommentStatus'
  | 'allSettings___discussionSettingsDefaultPingStatus'
  | 'allSettings___generalSettingsDateFormat'
  | 'allSettings___generalSettingsDescription'
  | 'allSettings___generalSettingsEmail'
  | 'allSettings___generalSettingsLanguage'
  | 'allSettings___generalSettingsStartOfWeek'
  | 'allSettings___generalSettingsTimeFormat'
  | 'allSettings___generalSettingsTimezone'
  | 'allSettings___generalSettingsTitle'
  | 'allSettings___generalSettingsUrl'
  | 'allSettings___readingSettingsPostsPerPage'
  | 'allSettings___writingSettingsDefaultCategory'
  | 'allSettings___writingSettingsDefaultPostFormat'
  | 'allSettings___writingSettingsUseSmilies'
  | 'discussionSettings___defaultCommentStatus'
  | 'discussionSettings___defaultPingStatus'
  | 'generalSettings___dateFormat'
  | 'generalSettings___description'
  | 'generalSettings___email'
  | 'generalSettings___language'
  | 'generalSettings___startOfWeek'
  | 'generalSettings___timeFormat'
  | 'generalSettings___timezone'
  | 'generalSettings___title'
  | 'generalSettings___url'
  | 'readingSettings___postsPerPage'
  | 'seo___breadcrumbs___archivePrefix'
  | 'seo___breadcrumbs___boldLast'
  | 'seo___breadcrumbs___enabled'
  | 'seo___breadcrumbs___homeText'
  | 'seo___breadcrumbs___notFoundText'
  | 'seo___breadcrumbs___prefix'
  | 'seo___breadcrumbs___searchPrefix'
  | 'seo___breadcrumbs___separator'
  | 'seo___breadcrumbs___showBlogPage'
  | 'seo___contentTypes___actionMonitorAction___metaDesc'
  | 'seo___contentTypes___actionMonitorAction___metaRobotsNoindex'
  | 'seo___contentTypes___actionMonitorAction___schemaType'
  | 'seo___contentTypes___actionMonitorAction___title'
  | 'seo___contentTypes___mediaItem___metaDesc'
  | 'seo___contentTypes___mediaItem___metaRobotsNoindex'
  | 'seo___contentTypes___mediaItem___schemaType'
  | 'seo___contentTypes___mediaItem___title'
  | 'seo___contentTypes___page___metaDesc'
  | 'seo___contentTypes___page___metaRobotsNoindex'
  | 'seo___contentTypes___page___schemaType'
  | 'seo___contentTypes___page___title'
  | 'seo___contentTypes___post___metaDesc'
  | 'seo___contentTypes___post___metaRobotsNoindex'
  | 'seo___contentTypes___post___schemaType'
  | 'seo___contentTypes___post___title'
  | 'seo___openGraph___defaultImage___altText'
  | 'seo___openGraph___defaultImage___authorDatabaseId'
  | 'seo___openGraph___defaultImage___authorId'
  | 'seo___openGraph___defaultImage___caption'
  | 'seo___openGraph___defaultImage___commentCount'
  | 'seo___openGraph___defaultImage___commentStatus'
  | 'seo___openGraph___defaultImage___databaseId'
  | 'seo___openGraph___defaultImage___date'
  | 'seo___openGraph___defaultImage___dateGmt'
  | 'seo___openGraph___defaultImage___description'
  | 'seo___openGraph___defaultImage___desiredSlug'
  | 'seo___openGraph___defaultImage___enclosure'
  | 'seo___openGraph___defaultImage___fileSize'
  | 'seo___openGraph___defaultImage___guid'
  | 'seo___openGraph___defaultImage___id'
  | 'seo___openGraph___defaultImage___link'
  | 'seo___openGraph___defaultImage___mediaItemUrl'
  | 'seo___openGraph___defaultImage___mediaType'
  | 'seo___openGraph___defaultImage___mimeType'
  | 'seo___openGraph___defaultImage___modified'
  | 'seo___openGraph___defaultImage___modifiedGmt'
  | 'seo___openGraph___defaultImage___parentDatabaseId'
  | 'seo___openGraph___defaultImage___parentId'
  | 'seo___openGraph___defaultImage___sizes'
  | 'seo___openGraph___defaultImage___slug'
  | 'seo___openGraph___defaultImage___sourceUrl'
  | 'seo___openGraph___defaultImage___srcSet'
  | 'seo___openGraph___defaultImage___status'
  | 'seo___openGraph___defaultImage___title'
  | 'seo___openGraph___defaultImage___uri'
  | 'seo___openGraph___defaultImage___nodeType'
  | 'seo___openGraph___defaultImage___children'
  | 'seo___openGraph___frontPage___description'
  | 'seo___openGraph___frontPage___title'
  | 'seo___redirects'
  | 'seo___redirects___format'
  | 'seo___redirects___origin'
  | 'seo___redirects___target'
  | 'seo___redirects___type'
  | 'seo___schema___companyLogo___altText'
  | 'seo___schema___companyLogo___authorDatabaseId'
  | 'seo___schema___companyLogo___authorId'
  | 'seo___schema___companyLogo___caption'
  | 'seo___schema___companyLogo___commentCount'
  | 'seo___schema___companyLogo___commentStatus'
  | 'seo___schema___companyLogo___databaseId'
  | 'seo___schema___companyLogo___date'
  | 'seo___schema___companyLogo___dateGmt'
  | 'seo___schema___companyLogo___description'
  | 'seo___schema___companyLogo___desiredSlug'
  | 'seo___schema___companyLogo___enclosure'
  | 'seo___schema___companyLogo___fileSize'
  | 'seo___schema___companyLogo___guid'
  | 'seo___schema___companyLogo___id'
  | 'seo___schema___companyLogo___link'
  | 'seo___schema___companyLogo___mediaItemUrl'
  | 'seo___schema___companyLogo___mediaType'
  | 'seo___schema___companyLogo___mimeType'
  | 'seo___schema___companyLogo___modified'
  | 'seo___schema___companyLogo___modifiedGmt'
  | 'seo___schema___companyLogo___parentDatabaseId'
  | 'seo___schema___companyLogo___parentId'
  | 'seo___schema___companyLogo___sizes'
  | 'seo___schema___companyLogo___slug'
  | 'seo___schema___companyLogo___sourceUrl'
  | 'seo___schema___companyLogo___srcSet'
  | 'seo___schema___companyLogo___status'
  | 'seo___schema___companyLogo___title'
  | 'seo___schema___companyLogo___uri'
  | 'seo___schema___companyLogo___nodeType'
  | 'seo___schema___companyLogo___children'
  | 'seo___schema___companyName'
  | 'seo___schema___companyOrPerson'
  | 'seo___schema___inLanguage'
  | 'seo___schema___logo___altText'
  | 'seo___schema___logo___authorDatabaseId'
  | 'seo___schema___logo___authorId'
  | 'seo___schema___logo___caption'
  | 'seo___schema___logo___commentCount'
  | 'seo___schema___logo___commentStatus'
  | 'seo___schema___logo___databaseId'
  | 'seo___schema___logo___date'
  | 'seo___schema___logo___dateGmt'
  | 'seo___schema___logo___description'
  | 'seo___schema___logo___desiredSlug'
  | 'seo___schema___logo___enclosure'
  | 'seo___schema___logo___fileSize'
  | 'seo___schema___logo___guid'
  | 'seo___schema___logo___id'
  | 'seo___schema___logo___link'
  | 'seo___schema___logo___mediaItemUrl'
  | 'seo___schema___logo___mediaType'
  | 'seo___schema___logo___mimeType'
  | 'seo___schema___logo___modified'
  | 'seo___schema___logo___modifiedGmt'
  | 'seo___schema___logo___parentDatabaseId'
  | 'seo___schema___logo___parentId'
  | 'seo___schema___logo___sizes'
  | 'seo___schema___logo___slug'
  | 'seo___schema___logo___sourceUrl'
  | 'seo___schema___logo___srcSet'
  | 'seo___schema___logo___status'
  | 'seo___schema___logo___title'
  | 'seo___schema___logo___uri'
  | 'seo___schema___logo___nodeType'
  | 'seo___schema___logo___children'
  | 'seo___schema___personLogo___altText'
  | 'seo___schema___personLogo___authorDatabaseId'
  | 'seo___schema___personLogo___authorId'
  | 'seo___schema___personLogo___caption'
  | 'seo___schema___personLogo___commentCount'
  | 'seo___schema___personLogo___commentStatus'
  | 'seo___schema___personLogo___databaseId'
  | 'seo___schema___personLogo___date'
  | 'seo___schema___personLogo___dateGmt'
  | 'seo___schema___personLogo___description'
  | 'seo___schema___personLogo___desiredSlug'
  | 'seo___schema___personLogo___enclosure'
  | 'seo___schema___personLogo___fileSize'
  | 'seo___schema___personLogo___guid'
  | 'seo___schema___personLogo___id'
  | 'seo___schema___personLogo___link'
  | 'seo___schema___personLogo___mediaItemUrl'
  | 'seo___schema___personLogo___mediaType'
  | 'seo___schema___personLogo___mimeType'
  | 'seo___schema___personLogo___modified'
  | 'seo___schema___personLogo___modifiedGmt'
  | 'seo___schema___personLogo___parentDatabaseId'
  | 'seo___schema___personLogo___parentId'
  | 'seo___schema___personLogo___sizes'
  | 'seo___schema___personLogo___slug'
  | 'seo___schema___personLogo___sourceUrl'
  | 'seo___schema___personLogo___srcSet'
  | 'seo___schema___personLogo___status'
  | 'seo___schema___personLogo___title'
  | 'seo___schema___personLogo___uri'
  | 'seo___schema___personLogo___nodeType'
  | 'seo___schema___personLogo___children'
  | 'seo___schema___personName'
  | 'seo___schema___siteName'
  | 'seo___schema___siteUrl'
  | 'seo___schema___wordpressSiteName'
  | 'seo___social___facebook___url'
  | 'seo___social___instagram___url'
  | 'seo___social___linkedIn___url'
  | 'seo___social___mySpace___url'
  | 'seo___social___pinterest___metaTag'
  | 'seo___social___pinterest___url'
  | 'seo___social___twitter___cardType'
  | 'seo___social___twitter___username'
  | 'seo___social___wikipedia___url'
  | 'seo___social___youTube___url'
  | 'seo___webmaster___baiduVerify'
  | 'seo___webmaster___googleVerify'
  | 'seo___webmaster___msVerify'
  | 'seo___webmaster___yandexVerify'
  | 'wpGatsby___arePrettyPermalinksEnabled'
  | 'writingSettings___defaultCategory'
  | 'writingSettings___defaultPostFormat'
  | 'writingSettings___useSmilies'
  | 'nodeType'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpEdge>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpFilterInput = {
  allSettings?: Maybe<WpSettingsFilterInput>;
  discussionSettings?: Maybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: Maybe<WpGeneralSettingsFilterInput>;
  readingSettings?: Maybe<WpReadingSettingsFilterInput>;
  seo?: Maybe<WpSeoConfigFilterInput>;
  wpGatsby?: Maybe<WpWpGatsbyFilterInput>;
  writingSettings?: Maybe<WpWritingSettingsFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpSortInput = {
  fields?: Maybe<Array<Maybe<WpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type CloudinaryAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<CloudinaryAssetEdge>;
  nodes: Array<CloudinaryAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<CloudinaryAssetGroupConnection>;
};


export type CloudinaryAssetConnectionDistinctArgs = {
  field: CloudinaryAssetFieldsEnum;
};


export type CloudinaryAssetConnectionMaxArgs = {
  field: CloudinaryAssetFieldsEnum;
};


export type CloudinaryAssetConnectionMinArgs = {
  field: CloudinaryAssetFieldsEnum;
};


export type CloudinaryAssetConnectionSumArgs = {
  field: CloudinaryAssetFieldsEnum;
};


export type CloudinaryAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: CloudinaryAssetFieldsEnum;
};

export type CloudinaryAssetEdge = {
  next?: Maybe<CloudinaryAsset>;
  node: CloudinaryAsset;
  previous?: Maybe<CloudinaryAsset>;
};

export type CloudinaryAssetFieldsEnum =
  | 'fixed___aspectRatio'
  | 'fixed___base64'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___tracedSVG'
  | 'fixed___width'
  | 'fluid___aspectRatio'
  | 'fluid___base64'
  | 'fluid___presentationHeight'
  | 'fluid___presentationWidth'
  | 'fluid___sizes'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___tracedSVG'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type CloudinaryAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<CloudinaryAssetEdge>;
  nodes: Array<CloudinaryAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type CloudinaryAssetSortInput = {
  fields?: Maybe<Array<Maybe<CloudinaryAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___entryLimit'
  | 'pluginOptions___query'
  | 'pluginOptions___displayName'
  | 'pluginOptions___minify'
  | 'pluginOptions___namespace'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___ssr'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___tsLoader___logLevel'
  | 'pluginOptions___codegen'
  | 'pluginOptions___codegenDelay'
  | 'pluginOptions___alwaysCheck'
  | 'pluginOptions___typeCheck'
  | 'pluginOptions___fonts'
  | 'pluginOptions___display'
  | 'pluginOptions___url'
  | 'pluginOptions___develop___nodeUpdateInterval'
  | 'pluginOptions___develop___hardCacheData'
  | 'pluginOptions___develop___hardCacheMediaFiles'
  | 'pluginOptions___production___allow404Images'
  | 'pluginOptions___production___hardCacheMediaFiles'
  | 'pluginOptions___schema___typePrefix'
  | 'pluginOptions___schema___requestConcurrency'
  | 'pluginOptions___schema___timeout'
  | 'pluginOptions___schema___queryDepth'
  | 'pluginOptions___schema___circularQueryLimit'
  | 'pluginOptions___schema___perPage'
  | 'pluginOptions___schema___previewRequestConcurrency'
  | 'pluginOptions___excludeFieldNames'
  | 'pluginOptions___verbose'
  | 'pluginOptions___cloudName'
  | 'pluginOptions___apiKey'
  | 'pluginOptions___apiSecret'
  | 'pluginOptions___resourceType'
  | 'pluginOptions___prefix'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { menu: { edges: Array<{ node: { menuItems?: Maybe<{ nodes?: Maybe<Array<Maybe<Pick<WpMenuItem, 'id' | 'path' | 'label'>>>> }> } }> }, user?: Maybe<Pick<WpUser, 'firstName' | 'lastName'>> };
