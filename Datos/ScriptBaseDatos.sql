CREATE DATABASE [PrimerParcial];
USE  [PrimerParcial]

CREATE TABLE [dbo].[Persona](
	[Identificacion] [nvarchar](15) NOT NULL PRIMARY KEY,
	[Nombre] [nvarchar](50) NULL,
    [Apellido] [nvarchar](50)NULL,
	[Sexo] [nvarchar](15) NULL,
	[Edad] [int] NULL,
    [Departamento] [nvarchar](40) NULL,
    [Ciudad] [nvarchar](40) NULL,
    [Modalidad] [nvarchar](20) NULL,
	[ValorApoyo] [numeric](18, 0) NULL,
    [Fecha] [datetime]NULL,
) 
GO

COMMIT