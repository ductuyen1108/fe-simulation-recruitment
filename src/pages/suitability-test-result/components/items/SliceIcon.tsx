type SliceIconProps = {
  color?: string
  size?: number
}

const SliceIcon = ({ color = '#88619A', size = 26 }: SliceIconProps) => (
  <svg width={size} height={size} viewBox='0 0 27 26' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 0L0 26L27 15C27 15 23.9869 8.98694 21 6C18.0131 3.01306 12 0 12 0Z' fill={color} />
  </svg>
)

export default SliceIcon
