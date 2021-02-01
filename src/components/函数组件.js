// 函数组件
/**
 * 该函数是一个有效的React组件，因为它接收唯一带有数据的"props"（代码属性）对象与并返回一个React元素。
 * 这类组件被称为"函数组件"，因为它本质上就是JavaScript函数
 * 
 */
export default function funComponent (props) {
    return <h1>函数组件，{props.name}</h1>
}