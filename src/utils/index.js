import Tag, { cleanTag } from './Tag'

export { Tag, cleanTag }
export const themed = key => props => props.theme[key]
