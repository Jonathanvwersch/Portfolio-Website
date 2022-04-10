import CMS from "netlify-cms"
import { TagControl, TagPreview } from "../components"

CMS.registerWidget("tags", TagControl, TagPreview)
