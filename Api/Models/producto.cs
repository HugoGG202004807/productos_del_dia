using System;

namespace Api.Models
{
    public class Producto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public decimal Valor { get; set; }
        public string Categoria { get; set; }
        public string Trabajador { get; set; }
    }
}