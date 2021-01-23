import { GenderType } from '../enums'

export default function (gender: GenderType): string {
  const genderMap = {
    f: 'Feminino',
    m: 'Masculino',
  }
  return genderMap[gender]
}
