import { inspect } from '../decorators/inspect.js'
import { logarTempoExecucao } from '../decorators/logarTempoExecucao.js'

export abstract class View<T> {
   protected elemento: HTMLElement

   constructor(seletor: string) {
      const elemento = document.querySelector(seletor)
      if (elemento) {
         this.elemento = elemento as HTMLElement
      } else {
         throw Error(`Seletor ${seletor} não existe no DOM`)
      }
   }
   @inspect
   @logarTempoExecucao()
   public update(model: T): void {
      let template = this.template(model)

      this.elemento.innerHTML = template
      const t2 = performance.now()
   }

   protected abstract template(model: T): string
}
